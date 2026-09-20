import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z298f_00y.css';
import '../../css/m/mbkz3y1jr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z298f_00y"/><path class="mbkz3y1jr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:traffic-light"} {...others} />);
}

export default Component;
