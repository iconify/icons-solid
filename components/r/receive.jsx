import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/m/m-p9z5hbj.css';
import '../../css/h/h9n-vnbef.css';
import '../../css/m/mjpwsgb_v.css';
import '../../css/r/rnbe3rl5g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="m-p9z5hbj"/><rect class="h9n-vnbef"/><path class="mjpwsgb_v"/><path class="rnbe3rl5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:receive"} {...others} />);
}

export default Component;
