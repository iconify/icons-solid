import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3mp-kbms.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o3mp-kbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:soft-serve-in-cup"} {...others} />);
}

export default Component;
