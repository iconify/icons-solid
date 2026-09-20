import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kymtsab6s.css';
import '../../css/t/te9a_gbcm.css';
import '../../css/a/a6kqdobnb.css';
import '../../css/x/xlcyklyns.css';
import '../../css/h/hm6703bba.css';
import '../../css/x/x-6bx03fu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kymtsab6s"/><path class="te9a_gbcm"/><path class="a6kqdobnb"/><path class="xlcyklyns"/><path class="hm6703bba"/><path class="x-6bx03fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:igloo"} {...others} />);
}

export default Component;
