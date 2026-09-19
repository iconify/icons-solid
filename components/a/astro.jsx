import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d6v9sig8l.css';
import '../../css/r/rj0qgivpn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="d6v9sig8l"/><path class="rj0qgivpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:astro"} {...others} />);
}

export default Component;
