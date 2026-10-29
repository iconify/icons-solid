import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jaokbwnxj.css';
import '../../css/l/lab3a5b9w.css';
import '../../css/m/mezep8bdy.css';
import '../../css/b/bos983bva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jaokbwnxj"/><path class="lab3a5b9w wm-a"/><path class="mezep8bdy wm-a"/><path class="bos983bva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thumbs-down-duo"} {...others} />);
}

export default Component;
