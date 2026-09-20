import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tw6wx2bwa.css';
import '../../css/f/fgh59rpxr.css';
import '../../css/s/s65bc9b3e.css';
import '../../css/f/fwg0yzbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tw6wx2bwa"/><path class="fgh59rpxr"/><path class="s65bc9b3e"/><path class="fwg0yzbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:temperature-high"} {...others} />);
}

export default Component;
