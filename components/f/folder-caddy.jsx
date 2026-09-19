import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzkxxlbjg.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hablheomi.css';
import '../../css/c/c_g70-55x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zzkxxlbjg"/><g class="t_2lkqbxb"><path class="hablheomi"/><path class="c_g70-55x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-caddy"} {...others} />);
}

export default Component;
