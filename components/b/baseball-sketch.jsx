import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o1dlosizy.css';
import '../../css/o/oadsfbb3w.css';
import '../../css/z/zaj5h4boz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o1dlosizy"/><path class="oadsfbb3w wm-k"/><path class="wm-a zaj5h4boz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baseball-sketch"} {...others} />);
}

export default Component;
