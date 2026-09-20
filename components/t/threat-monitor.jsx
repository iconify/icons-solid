import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m2kq9pbvf.css';
import '../../css/l/lrim2wb-j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="m2kq9pbvf"/><path class="lrim2wb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:threat-monitor"} {...others} />);
}

export default Component;
