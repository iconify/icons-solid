import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/idhp54srj.css';
import '../../css/p/p3vjo6b9i.css';
import '../../css/r/rzwofibir.css';
import '../../css/v/vzt-j8h2r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="idhp54srj"/><path class="p3vjo6b9i"/><path class="rzwofibir"/><path class="vzt-j8h2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:kotlin"} {...others} />);
}

export default Component;
