import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e4cehbb5f.css';
import '../../css/b/b7hrjfb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e4cehbb5f wm-k"/><path class="b7hrjfb0n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mic-vocal-sketch"} {...others} />);
}

export default Component;
