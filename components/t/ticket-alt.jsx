import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l1ihxc_zr.css';
import '../../css/l/lbnnqilwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l1ihxc_zr"/><path class="lbnnqilwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ticket-alt"} {...others} />);
}

export default Component;
