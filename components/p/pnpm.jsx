import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/chico6sfv.css';
import '../../css/w/wuh5h2bwt.css';
import '../../css/s/stgp-sogn.css';
import '../../css/p/pa9ny6bge.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="chico6sfv"/><path class="wuh5h2bwt"/><path class="stgp-sogn"/><path class="pa9ny6bge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:pnpm"} {...others} />);
}

export default Component;
