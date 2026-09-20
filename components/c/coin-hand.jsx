import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmn1d9yof.css';
import '../../css/d/dzyw1bcez.css';
import '../../css/d/d6pmdjb5s.css';
import '../../css/u/uvtuwfb2y.css';
import '../../css/c/clsueg3in.css';
import '../../css/c/c8r1_9b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kmn1d9yof"/><path class="dzyw1bcez"/><path class="d6pmdjb5s"/><path class="uvtuwfb2y"/><path class="clsueg3in"/><path class="c8r1_9b9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:coin-hand"} {...others} />);
}

export default Component;
