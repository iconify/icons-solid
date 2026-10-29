import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nlbfqsa6d.css';
import '../../css/t/t8pf0gk5g.css';
import '../../css/j/jqg226l7r.css';
import '../../css/h/hfgrowsuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nlbfqsa6d"/><path class="t8pf0gk5g wm-k"/><path class="jqg226l7r wm-a"/><path class="hfgrowsuv wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:broom-sketch"} {...others} />);
}

export default Component;
