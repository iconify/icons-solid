import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9iwjnbjk.css';
import '../../css/z/zgt80pzjo.css';
import '../../css/h/h5_h89bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m9iwjnbjk"/><path class="zgt80pzjo"/><circle transform="matrix(1 0 0 -1 10.75 17.938)" class="h5_h89bsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:alert-triangle"} {...others} />);
}

export default Component;
