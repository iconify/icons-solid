import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9ww9pbwo.css';
import '../../css/h/hh0s-2j4i.css';
import '../../css/i/ippy8g9bw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x9ww9pbwo"/><path class="hh0s-2j4i"/><path class="ippy8g9bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:palette-two-tone"} {...others} />);
}

export default Component;
