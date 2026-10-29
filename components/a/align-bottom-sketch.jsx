import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jrmib2jjd.css';
import '../../css/u/uah0ipwxe.css';
import '../../css/z/zghmjfooh.css';
import '../../css/x/xkapnbb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jrmib2jjd"/><path class="uah0ipwxe wm-k"/><path class="wm-k zghmjfooh"/><path class="wm-a xkapnbb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-bottom-sketch"} {...others} />);
}

export default Component;
