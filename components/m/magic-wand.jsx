import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/c/cttshac6l.css';
import '../../css/v/vdxbuvbxv.css';
import '../../css/i/itcx7gxqm.css';
import '../../css/c/c-rb7r0ij.css';
import '../../css/i/i0wjopbnw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="cttshac6l"/><path class="vdxbuvbxv"/><path class="itcx7gxqm"/><path class="c-rb7r0ij"/><path class="i0wjopbnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:magic-wand"} {...others} />);
}

export default Component;
