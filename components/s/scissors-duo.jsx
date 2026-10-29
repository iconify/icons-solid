import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rg8hszz0a.css';
import '../../css/d/d_tyvacbg.css';
import '../../css/t/tu5qhwb4p.css';
import '../../css/b/bqabc6niv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rg8hszz0a"/><path class="d_tyvacbg wm-a"/><path class="tu5qhwb4p"/><path class="bqabc6niv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scissors-duo"} {...others} />);
}

export default Component;
