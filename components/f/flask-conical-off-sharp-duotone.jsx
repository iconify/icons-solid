import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o4-575bqq.css';
import '../../css/q/quk2qgbrt.css';
import '../../css/y/ysqxkebtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="o4-575bqq"/><path class="quk2qgbrt"/><path class="ysqxkebtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flask-conical-off-sharp-duotone"} {...others} />);
}

export default Component;
