import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pubfbmb7r.css';
import '../../css/r/r9ynmqfyy.css';
import '../../css/a/azuzlgr1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pubfbmb7r"/><path class="r9ynmqfyy"/><path class="azuzlgr1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-heart-duotone"} {...others} />);
}

export default Component;
