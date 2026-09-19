import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyxukz89o.css';
import '../../css/s/s3ncxfb_u.css';
import '../../css/g/gg_dz3bxt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="eyxukz89o"><path class="s3ncxfb_u"/><path class="gg_dz3bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:undo"} {...others} />);
}

export default Component;
