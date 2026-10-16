import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifdij495w.css';
import '../../css/f/f2vx_69qf.css';
import '../../css/z/zznb6pbvc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ifdij495w"/><path class="f2vx_69qf"/><path class="zznb6pbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lightning-protection-20"} {...others} />);
}

export default Component;
