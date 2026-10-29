import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/ciu_jhtkl.css';
import '../../css/o/o4_sfzbau.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/v/vuktelb6q.css';
import '../../css/n/nqq0vzb3j.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ciu_jhtkl wm-deco"/><path class="o4_sfzbau wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="vuktelb6q wm-k"/><path class="nqq0vzb3j wm-a"/><path class="vildi5bvg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-turban-blueprint"} {...others} />);
}

export default Component;
