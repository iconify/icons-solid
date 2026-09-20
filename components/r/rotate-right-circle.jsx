import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mm5z0ac2n.css';
import '../../css/d/dln8ziysl.css';
import '../../css/y/yosxokljj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mm5z0ac2n"/><path class="dln8ziysl"/><path class="yosxokljj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:rotate-right-circle"} {...others} />);
}

export default Component;
