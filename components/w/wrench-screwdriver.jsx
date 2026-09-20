import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qj7etz5lg.css';
import '../../css/h/hfyotsgxj.css';
import '../../css/m/minqdbolb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qj7etz5lg"/><path class="hfyotsgxj"/><path class="minqdbolb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:wrench-screwdriver"} {...others} />);
}

export default Component;
