import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dawcsab1j.css';
import '../../css/d/dv9bu8b_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="dawcsab1j"/><path class="dv9bu8b_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:actions-line"} {...others} />);
}

export default Component;
