import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xur2_mbaw.css';
import '../../css/h/hafvp2bmg.css';
import '../../css/e/epa6czb7k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="xur2_mbaw"/><path class="hafvp2bmg"/><path class="epa6czb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cabal"} {...others} />);
}

export default Component;
