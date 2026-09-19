import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/z2r1xnbjr.css';
import '../../css/l/lia2tlbhq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="z2r1xnbjr"/><path class="lia2tlbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:racket"} {...others} />);
}

export default Component;
