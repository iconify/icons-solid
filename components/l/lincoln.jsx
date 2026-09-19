import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sz126lxhn.css';
import '../../css/f/f4kc0gbbi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="sz126lxhn"/><path class="f4kc0gbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lincoln"} {...others} />);
}

export default Component;
