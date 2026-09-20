import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fbkrm7bgj.css';
import '../../css/r/r_9ly7e1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="fbkrm7bgj"/><path class="r_9ly7e1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-dashed-full-sharp-fill"} {...others} />);
}

export default Component;
