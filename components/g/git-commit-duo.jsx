import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/felu19btq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kmaxbibqw.css';
import '../../css/s/sl9j_vb_t.css';
import '../../css/l/l5-q_fbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="felu19btq secondary"/><g class="dt0cm9dhy primary"><path class="kmaxbibqw"/><path class="sl9j_vb_t"/><path class="l5-q_fbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:git-commit-duo"} {...others} />);
}

export default Component;
