import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g3oicd9zy.css';
import '../../css/w/w6urksb-q.css';
import '../../css/h/ht8ohn1mx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="g3oicd9zy"/><path class="w6urksb-q"/><path class="ht8ohn1mx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:disk"} {...others} />);
}

export default Component;
