import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a41wlnb0g.css';
import '../../css/t/tzzto2buw.css';
import '../../css/i/ihhooltlj.css';
import '../../css/h/hjdgj7wdz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="a41wlnb0g"/><g class="tzzto2buw"><path transform="matrix(.99904 0 0 1 .008 0)" class="ihhooltlj"/><path transform="matrix(.99904 0 0 1 .008 0)" class="hjdgj7wdz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-docker-open"} {...others} />);
}

export default Component;
