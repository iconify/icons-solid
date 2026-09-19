import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7-6b3kbh.css';
import '../../css/x/xnaxp_oyy.css';
import '../../css/m/mj3jpacnu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f7-6b3kbh"/><path class="xnaxp_oyy"/><path class="mj3jpacnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:model-s"} {...others} />);
}

export default Component;
