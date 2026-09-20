import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dln8ziysl.css';
import '../../css/y/y0i_qvbwj.css';
import '../../css/e/ebls0tbft.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dln8ziysl"/><path class="y0i_qvbwj"/><path class="ebls0tbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:dribble"} {...others} />);
}

export default Component;
