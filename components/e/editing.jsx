import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/y-vh9ab-m.css';
import '../../css/q/qqcxr9mnl.css';
import '../../css/s/squd7s8xm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="y-vh9ab-m"/><circle class="qqcxr9mnl"/><path class="squd7s8xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:editing"} {...others} />);
}

export default Component;
