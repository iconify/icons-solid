import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uarvm0bms.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uarvm0bms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:flower-bouquet"} {...others} />);
}

export default Component;
