import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gzexv_s5q.css';
import '../../css/h/h_kc31mec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gzexv_s5q"/><path class="h_kc31mec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lego-off"} {...others} />);
}

export default Component;
