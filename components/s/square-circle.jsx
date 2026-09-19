import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dawcsab1j.css';
import '../../css/n/n0f0bgy_u.css';
import '../../css/y/yjjy4ebaw.css';
import '../../css/w/wu5o4370d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dawcsab1j"/><path class="n0f0bgy_u"/><path class="yjjy4ebaw"/><path class="wu5o4370d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-circle"} {...others} />);
}

export default Component;
