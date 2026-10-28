import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swfff6brw.css';
import '../../css/h/hwy63jppz.css';
import '../../css/r/rogiyybxj.css';
import '../../css/a/alf6uubgl.css';
import '../../css/l/le5satbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="swfff6brw"/><circle class="hwy63jppz"/><circle class="rogiyybxj"/><circle class="alf6uubgl"/><circle class="le5satbnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chart-quadrant"} {...others} />);
}

export default Component;
