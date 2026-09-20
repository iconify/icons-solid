import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nka8llb2t.css';
import '../../css/q/q4wwqymuh.css';
import '../../css/q/qlvlcac3k.css';
import '../../css/m/mm4-s-v3d.css';
import '../../css/x/xmd7kl32g.css';
import '../../css/b/bl0f1rb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nka8llb2t"/><path class="q4wwqymuh"/><path class="qlvlcac3k"/><path class="mm4-s-v3d"/><path class="xmd7kl32g"/><path class="bl0f1rb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-edit-cut"} {...others} />);
}

export default Component;
