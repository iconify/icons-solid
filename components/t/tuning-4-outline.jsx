import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_sb97l0e.css';
import '../../css/h/h8mrn0pew.css';
import '../../css/h/h6noiyhcf.css';
import '../../css/z/zdwo9hbfx.css';
import '../../css/w/wyqtwliio.css';
import '../../css/v/vl9n5kv-k.css';
import '../../css/w/wefxmgbjw.css';
import '../../css/i/ikz9254yy.css';
import '../../css/c/cmvtxebds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x_sb97l0e"/><path clip-rule="evenodd" class="h8mrn0pew"/><path clip-rule="evenodd" class="h6noiyhcf"/><path class="zdwo9hbfx"/><path class="wyqtwliio"/><path class="vl9n5kv-k"/><path class="wefxmgbjw"/><path class="ikz9254yy"/><path class="cmvtxebds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-4-outline"} {...others} />);
}

export default Component;
