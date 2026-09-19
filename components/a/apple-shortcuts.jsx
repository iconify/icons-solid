import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s--3oi83y.css';
import '../../css/d/d_yfgliwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s--3oi83y"/><path class="d_yfgliwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:apple-shortcuts"} {...others} />);
}

export default Component;
