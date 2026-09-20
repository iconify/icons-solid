import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8jfmzhjz.css';
import '../../css/f/fzgoo2bls.css';
import '../../css/m/mcp025bdk.css';
import '../../css/k/kcakmacwb.css';
import '../../css/v/v6h6y0esp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q8jfmzhjz"/><path class="fzgoo2bls"/><path class="mcp025bdk"/><path class="kcakmacwb"/><path class="v6h6y0esp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wind-vane-duo"} {...others} />);
}

export default Component;
