import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mps1_khmf.css';
import '../../css/w/wrxfb-bbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mps1_khmf"/><path class="wrxfb-bbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:captions-two-tone"} {...others} />);
}

export default Component;
