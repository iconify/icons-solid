import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8hm-2p5o.css';
import '../../css/x/xrqps8bku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f8hm-2p5o"/><path class="xrqps8bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pencil-ruler-fill"} {...others} />);
}

export default Component;
