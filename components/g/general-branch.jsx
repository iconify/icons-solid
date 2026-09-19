import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rx5d4dp5k.css';
import '../../css/d/dwytx_boo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rx5d4dp5k"/><path class="dwytx_boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:general-branch"} {...others} />);
}

export default Component;
