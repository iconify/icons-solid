import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_f0wxssg.css';
import '../../css/k/kdy6dcwqy.css';
import '../../css/q/qz2cgcavq.css';
import '../../css/e/ekkf2kb6w.css';
import '../../css/y/yboe5bc6p.css';
import '../../css/w/w4wiagk1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d_f0wxssg"/><path class="kdy6dcwqy"/><path class="qz2cgcavq"/><path class="ekkf2kb6w"/><path class="yboe5bc6p"/><path class="w4wiagk1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:stamp-2"} {...others} />);
}

export default Component;
