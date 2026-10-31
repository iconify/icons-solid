import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wm4aheb3h.css';
import '../../css/w/w-y_52bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wm4aheb3h"/><path class="w-y_52bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-terminal-duocolor-round"} {...others} />);
}

export default Component;
