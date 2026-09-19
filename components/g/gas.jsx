import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d2hxufb_c.css';
import '../../css/p/p57t2dkbq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="d2hxufb_c"/><path class="p57t2dkbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gas"} {...others} />);
}

export default Component;
