import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv46-z28m.css';
import '../../css/f/feh9g0bqf.css';
import '../../css/p/pvotryzei.css';
import '../../css/k/k41zy7q4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pv46-z28m"/><rect class="feh9g0bqf"/><rect class="pvotryzei"/><rect class="k41zy7q4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:diagram-flow-vertical"} {...others} />);
}

export default Component;
