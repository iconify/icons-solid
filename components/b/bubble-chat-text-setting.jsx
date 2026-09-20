import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lox516bku.css';
import '../../css/n/nnljg81wr.css';
import '../../css/i/i0-abgbpl.css';
import '../../css/g/g4u11hbak.css';
import '../../css/s/stzq21bgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lox516bku"/><path class="nnljg81wr"/><path class="i0-abgbpl"/><path class="g4u11hbak"/><path class="stzq21bgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bubble-chat-text-setting"} {...others} />);
}

export default Component;
