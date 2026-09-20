import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/it5js_8rn.css';
import '../../css/g/gp0egaclj.css';
import '../../css/h/hwlwzjglt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="it5js_8rn"/><circle class="gp0egaclj"/><path class="hwlwzjglt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:switch-camera"} {...others} />);
}

export default Component;
