import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/khwz4mspj.css';
import '../../css/r/r7dlor7xk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="khwz4mspj"/><path class="r7dlor7xk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-animation-open"} {...others} />);
}

export default Component;
