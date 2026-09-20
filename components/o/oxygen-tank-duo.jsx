import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0ixkvs5j.css';
import '../../css/d/d2bb-3puv.css';
import '../../css/q/qk3z62bic.css';
import '../../css/v/vh0i4blho.css';
import '../../css/p/pzxd3rbwj.css';
import '../../css/u/u4ptkpqrs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m0ixkvs5j"/><path class="d2bb-3puv"/><path class="qk3z62bic"/><path class="vh0i4blho"/><path class="pzxd3rbwj"/><path class="u4ptkpqrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:oxygen-tank-duo"} {...others} />);
}

export default Component;
