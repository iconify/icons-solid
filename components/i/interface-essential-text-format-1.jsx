import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjzz82bjc.css';
import '../../css/b/bsmjsbbfw.css';
import '../../css/p/pac8mpbat.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jjzz82bjc"/><path class="bsmjsbbfw"/><path class="pac8mpbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-text-format-1"} {...others} />);
}

export default Component;
