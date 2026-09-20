import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3kcgv4vg.css';
import '../../css/y/y0hjv5blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h3kcgv4vg"/><path class="y0hjv5blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:umbrella-two-tone"} {...others} />);
}

export default Component;
