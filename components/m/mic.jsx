import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sb6pk9_pi.css';
import '../../css/w/wbzrt3bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><rect class="sb6pk9_pi"/><path class="wbzrt3bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mic"} {...others} />);
}

export default Component;
