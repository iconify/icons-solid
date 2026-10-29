import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e4auw9bfl.css';
import '../../css/z/z6rfwvb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e4auw9bfl"/><path class="wm-k z6rfwvb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:blocks-sketch"} {...others} />);
}

export default Component;
