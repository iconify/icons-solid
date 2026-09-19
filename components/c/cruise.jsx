import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/epr703v6w.css';
import '../../css/h/h8t75bbcu.css';
import '../../css/m/mjtgadbkn.css';
import '../../css/n/nmcxl3q8j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="epr703v6w"/><path class="h8t75bbcu"/><path class="mjtgadbkn"/><path class="nmcxl3q8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cruise"} {...others} />);
}

export default Component;
