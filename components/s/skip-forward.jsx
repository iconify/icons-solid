import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nool2ybci.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lekxu6bov.css';
import '../../css/c/c6va8bcfi.css';
import '../../css/l/lauakybnx.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c-_tuw2_g.css';
import '../../css/l/lg93adnmb.css';
import '../../css/t/tnhxxibgp.css';
import '../../css/g/ge6pl5b7t.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGIX8xXcPP" class="nool2ybci"/></defs><g class="t_2lkqbxb"><path class="lekxu6bov wm-shadow"/><path class="c6va8bcfi"/><path class="lauakybnx"/><use href="#SVGIX8xXcPP" class="d2kvgvbvc"/><path class="c-_tuw2_g"/><use href="#SVGIX8xXcPP" class="d2kvgvbvc"/><path class="lg93adnmb"/><path class="tnhxxibgp wm-shine"/><path class="ge6pl5b7t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:skip-forward"} {...others} />);
}

export default Component;
