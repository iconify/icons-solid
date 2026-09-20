import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y78ntvy6k.css';
import '../../css/n/n_sfw9rfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="y78ntvy6k"/><path class="n_sfw9rfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-click-sharp-two-tone"} {...others} />);
}

export default Component;
