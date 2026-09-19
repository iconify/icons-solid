import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hfb1keruk.css';
import '../../css/t/tzzto2buw.css';
import '../../css/i/ihhooltlj.css';
import '../../css/h/hjdgj7wdz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="hfb1keruk"/><g class="tzzto2buw"><path class="ihhooltlj"/><path class="hjdgj7wdz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-docker"} {...others} />);
}

export default Component;
