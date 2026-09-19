import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vusi-j1ph.css';
import '../../css/o/oizrubanj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="vusi-j1ph"/><path class="oizrubanj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:vitest"} {...others} />);
}

export default Component;
