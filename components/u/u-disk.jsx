import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/ynmj3tykv.css';
import '../../css/q/qyeqm8boe.css';
import '../../css/v/vv2y0abry.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ynmj3tykv"/><path class="qyeqm8boe"/><path class="vv2y0abry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:u-disk"} {...others} />);
}

export default Component;
