import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/ood7b4x1k.css';
import '../../css/i/ia6zp40mg.css';
import '../../css/w/w6ts2tchd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ood7b4x1k"/><path class="ia6zp40mg"/><path class="w6ts2tchd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:canned-fruit"} {...others} />);
}

export default Component;
