import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uew6tl-xy.css';
import '../../css/s/s5s3fefsf.css';
import '../../css/s/si3inpc3v.css';
import '../../css/i/i70bgdbfl.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uew6tl-xy"/><path class="s5s3fefsf"/><path class="si3inpc3v"/><path class="i70bgdbfl"/><circle class="shu3xdl9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-circle-linear"} {...others} />);
}

export default Component;
