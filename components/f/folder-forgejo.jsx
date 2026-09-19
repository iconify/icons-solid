import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dv-8sac5l.css';
import '../../css/t/t87imdbvf.css';
import '../../css/v/vj-in0b-p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="dv-8sac5l"/><path class="t87imdbvf"/><path class="vj-in0b-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-forgejo"} {...others} />);
}

export default Component;
