import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hc5d41b9j.css';
import '../../css/o/o37f2gbww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hc5d41b9j"/><path class="o37f2gbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-x-two-tone"} {...others} />);
}

export default Component;
