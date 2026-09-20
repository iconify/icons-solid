import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u71r05b5b.css';
import '../../css/q/qdvvwloob.css';
import '../../css/x/x15cgyofd.css';
import '../../css/o/of_volgin.css';
import '../../css/h/hougmsuwm.css';
import '../../css/m/mubgyzqyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u71r05b5b"/><path class="qdvvwloob"/><path class="x15cgyofd"/><path class="of_volgin"/><path class="hougmsuwm"/><path class="mubgyzqyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:kirby-2"} {...others} />);
}

export default Component;
