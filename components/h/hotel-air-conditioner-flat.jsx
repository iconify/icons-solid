import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8_c_mu8e.css';
import '../../css/u/u6vbtabfy.css';
import '../../css/t/tchhv6w5u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k8_c_mu8e"/><path class="u6vbtabfy"/><path clip-rule="evenodd" class="tchhv6w5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hotel-air-conditioner-flat"} {...others} />);
}

export default Component;
