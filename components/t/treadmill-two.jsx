import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/ld3j6-bqh.css';
import '../../css/t/tov0w7bar.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ld3j6-bqh"/><rect class="tov0w7bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:treadmill-two"} {...others} />);
}

export default Component;
