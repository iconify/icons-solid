import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/a/a2htfsbbq.css';
import '../../css/d/dxmdg_owy.css';
import '../../css/y/y37mlabmf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="a2htfsbbq"/><path class="dxmdg_owy"/><path clip-rule="evenodd" class="y37mlabmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:party-poppers-pop"} {...others} />);
}

export default Component;
