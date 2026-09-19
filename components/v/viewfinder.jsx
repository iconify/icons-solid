import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/br9dnzx7a.css';
import '../../css/n/nmmy-c08d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="br9dnzx7a"/><path class="nmmy-c08d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:viewfinder"} {...others} />);
}

export default Component;
