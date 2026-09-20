import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/psvpw2rsi.css';
import '../../css/i/imzag9cmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="psvpw2rsi"/><path class="imzag9cmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:caret-right-two-tone"} {...others} />);
}

export default Component;
