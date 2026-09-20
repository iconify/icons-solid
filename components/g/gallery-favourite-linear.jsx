import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hw-5j8edp.css';
import '../../css/s/sixfdvbze.css';
import '../../css/i/iucnxxyud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hw-5j8edp"/><path class="sixfdvbze"/><path class="iucnxxyud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-favourite-linear"} {...others} />);
}

export default Component;
