import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x9fb59bts.css';
import '../../css/h/hj5n3xbhm.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><rect class="x9fb59bts"/><path class="hj5n3xbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:orshot"} {...others} />);
}

export default Component;
