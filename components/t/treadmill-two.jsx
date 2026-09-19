import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/ld3j6-bqh.css';
import '../../css/h/hk2lmybgt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ld3j6-bqh"/><rect class="hk2lmybgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:treadmill-two"} {...others} />);
}

export default Component;
