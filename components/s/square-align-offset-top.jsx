import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqjnmwbwt.css';
import '../../css/u/upl6tcnav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vqjnmwbwt"/><path class="upl6tcnav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-align-offset-top"} {...others} />);
}

export default Component;
