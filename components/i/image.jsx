import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mu2w5_b1y.css';
import '../../css/c/ce6bp3l0b.css';
import '../../css/f/f9wxipb6g.css';
import '../../css/u/u989i_bik.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="mu2w5_b1y"/><path class="ce6bp3l0b"/><path class="f9wxipb6g"/><path class="u989i_bik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:image"} {...others} />);
}

export default Component;
