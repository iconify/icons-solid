import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmw_3pbmo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gmw_3pbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:chip-bag-with-chip"} {...others} />);
}

export default Component;
