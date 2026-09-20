import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-wis1b_l.css';
import '../../css/j/jfggo2b1l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j-wis1b_l"/><path class="jfggo2b1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-alert-triangle-2"} {...others} />);
}

export default Component;
