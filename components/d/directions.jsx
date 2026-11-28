import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y_ntoacqo.css';
import '../../css/k/kx7i-fb0m.css';
import '../../css/n/nnxrb2j_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y_ntoacqo"/><path class="kx7i-fb0m"/><path class="nnxrb2j_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:directions"} {...others} />);
}

export default Component;
