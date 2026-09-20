import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/k/ktba1pbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="hwsal5q-o"/><path class="ktba1pbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:planet"} {...others} />);
}

export default Component;
