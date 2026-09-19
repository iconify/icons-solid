import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xar5g-b_u.css';
import '../../css/g/gm2aim3mj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xar5g-b_u"/><path class="gm2aim3mj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:carrot"} {...others} />);
}

export default Component;
