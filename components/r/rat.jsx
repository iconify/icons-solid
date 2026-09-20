import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k4p5qqb4u.css';
import '../../css/s/s_joph9qy.css';
import '../../css/m/mrmwl73_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k4p5qqb4u"/><path class="s_joph9qy"/><path class="mrmwl73_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rat"} {...others} />);
}

export default Component;
