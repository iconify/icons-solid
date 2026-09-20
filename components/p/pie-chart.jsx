import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m4ip4zb8q.css';
import '../../css/y/y7c68_isp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m4ip4zb8q"/><path class="y7c68_isp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pie-chart"} {...others} />);
}

export default Component;
