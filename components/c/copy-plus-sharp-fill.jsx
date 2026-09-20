import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kytdc0isv.css';
import '../../css/c/cehufz42m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="kytdc0isv"/><path clip-rule="evenodd" class="cehufz42m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:copy-plus-sharp-fill"} {...others} />);
}

export default Component;
