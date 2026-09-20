import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjfjtsb2g.css';
import '../../css/v/v3wew2ztk.css';
import '../../css/j/jm4gr77xf.css';
import '../../css/y/y6wxknbvs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hjfjtsb2g"/><path class="v3wew2ztk"/><path class="jm4gr77xf"/><path class="y6wxknbvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:paintbrush-2"} {...others} />);
}

export default Component;
