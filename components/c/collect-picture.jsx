import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr5bzobwc.css';
import '../../css/q/q6u6gfbgw.css';
import '../../css/i/io84_hbus.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rr5bzobwc"/><path class="q6u6gfbgw"/><path class="io84_hbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:collect-picture"} {...others} />);
}

export default Component;
