import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cxtnstbes.css';
import '../../css/c/ciescfx1e.css';
import '../../css/l/l87mh_b9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cxtnstbes wm-shadow"/><path class="ciescfx1e wm-shadow"/><path class="l87mh_b9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:webhook"} {...others} />);
}

export default Component;
