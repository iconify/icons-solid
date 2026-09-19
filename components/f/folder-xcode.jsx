import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vj-in0b-p.css';
import '../../css/a/a72excwsa.css';
import '../../css/q/qa5gsllwk.css';
import '../../css/x/x8iozabdg.css';
import '../../css/s/suv371o5h.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="vj-in0b-p"/><path class="a72excwsa"/><g class="qa5gsllwk"><path transform="matrix(.28528 -.08959 .08932 .28431 8.46 8.178)" class="x8iozabdg"/><path transform="matrix(.28528 -.08959 .08932 .28431 8.46 8.178)" class="suv371o5h"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-xcode"} {...others} />);
}

export default Component;
