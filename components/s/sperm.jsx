import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/ree79tbzy.css';
import '../../css/s/sq_622bov.css';
import '../../css/r/rp1r7sbyy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="ree79tbzy"/><path class="sq_622bov"/><path class="rp1r7sbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sperm"} {...others} />);
}

export default Component;
