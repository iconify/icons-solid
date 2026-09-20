import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2x15krep.css';
import '../../css/f/f3obpt_ka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a2x15krep"/><path class="f3obpt_ka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shapes-two-tone"} {...others} />);
}

export default Component;
