import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g9w__9_9f.css';
import '../../css/r/rahop_bkr.css';
import '../../css/h/hxhgk1xob.css';
import '../../css/h/hob-fgjds.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="g9w__9_9f"/><path class="rahop_bkr"/><path class="hxhgk1xob"/><path class="hob-fgjds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rectangle-tear"} {...others} />);
}

export default Component;
