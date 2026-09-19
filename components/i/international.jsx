import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/m/mfaj5_b9w.css';
import '../../css/d/dmx9fugvp.css';
import '../../css/h/hi6vwvbkm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="mfaj5_b9w"/><path class="dmx9fugvp"/><path class="hi6vwvbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:international"} {...others} />);
}

export default Component;
