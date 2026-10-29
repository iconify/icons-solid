import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jh6lxrb9u.css';
import '../../css/p/p8v2fyboy.css';
import '../../css/t/tzpvtdwuf.css';
import '../../css/x/xdetkr8ld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jh6lxrb9u"/><path class="p8v2fyboy wm-s"/><path class="tzpvtdwuf wm-k"/><path class="wm-s xdetkr8ld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-incoming-sketch"} {...others} />);
}

export default Component;
