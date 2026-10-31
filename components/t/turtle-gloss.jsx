import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vlnc4gmyf.css';
import '../../css/v/vtlgm4a0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="vlnc4gmyf wm-k"/><path class="vtlgm4a0h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:turtle-gloss"} {...others} />);
}

export default Component;
