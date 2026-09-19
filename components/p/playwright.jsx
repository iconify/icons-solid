import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nbdt3_blw.css';
import '../../css/j/jh3rbpjgt.css';
import '../../css/v/vaz83m9jb.css';
import '../../css/f/fgazzkb_a.css';
import '../../css/v/v7vizabid.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="nbdt3_blw"/><path class="jh3rbpjgt"/><path class="vaz83m9jb"/><path class="fgazzkb_a"/><path class="v7vizabid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:playwright"} {...others} />);
}

export default Component;
