import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/feh9g0bqf.css';
import '../../css/p/pvotryzei.css';
import '../../css/k/k41zy7q4s.css';
import '../../css/e/en34xy1yh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="feh9g0bqf"/><rect class="pvotryzei"/><rect class="k41zy7q4s"/><path class="en34xy1yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:network"} {...others} />);
}

export default Component;
