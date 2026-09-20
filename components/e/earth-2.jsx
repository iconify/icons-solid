import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lstxdob-w.css';
import '../../css/y/yd0prmb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lstxdob-w"/><path class="yd0prmb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:earth-2"} {...others} />);
}

export default Component;
