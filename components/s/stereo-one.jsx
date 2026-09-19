import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xdqh4gbub.css';
import '../../css/l/ly55e3b8j.css';
import '../../css/g/g0km6z-da.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="xdqh4gbub"/><path class="ly55e3b8j"/><circle class="g0km6z-da"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:stereo-one"} {...others} />);
}

export default Component;
