import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uoi8cibpu.css';
import '../../css/f/f669ls71m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uoi8cibpu"/><path class="f669ls71m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scissors-two-tone"} {...others} />);
}

export default Component;
