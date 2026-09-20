import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tf21_g3ng.css';
import '../../css/m/mu7-ho2lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tf21_g3ng"/><path class="mu7-ho2lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:eye-two-tone"} {...others} />);
}

export default Component;
