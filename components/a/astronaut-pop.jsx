import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/u/u416tetlg.css';
import '../../css/w/wpjocqbwu.css';
import '../../css/r/rxhiw2scp.css';
import '../../css/k/krsou6bvr.css';
import '../../css/m/m8vstpb-z.css';
import '../../css/j/jr9wzubcr.css';
import '../../css/f/fzb9s1duj.css';
import '../../css/k/kx7vh0beo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="u416tetlg"/><path class="wpjocqbwu"/><path class="rxhiw2scp"/><path clip-rule="evenodd" class="krsou6bvr"/><path class="m8vstpb-z"/><path class="jr9wzubcr"/><path class="fzb9s1duj"/><path clip-rule="evenodd" class="kx7vh0beo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:astronaut-pop"} {...others} />);
}

export default Component;
