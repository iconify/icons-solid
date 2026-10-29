import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nn7g7rqyu.css';
import '../../css/f/flfje358z.css';
import '../../css/u/urlzan7ys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nn7g7rqyu"/><path class="flfje358z wm-shadow"/><path class="urlzan7ys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pause-engrave"} {...others} />);
}

export default Component;
