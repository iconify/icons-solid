import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q58hkcbgc.css';
import '../../css/g/g--nw5b-h.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="q58hkcbgc"/><path class="g--nw5b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-api"} {...others} />);
}

export default Component;
