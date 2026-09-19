import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/ood7b4x1k.css';
import '../../css/i/ia6zp40mg.css';
import '../../css/i/i43jspqdt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ood7b4x1k"/><path class="ia6zp40mg"/><path class="i43jspqdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:canned-fruit"} {...others} />);
}

export default Component;
