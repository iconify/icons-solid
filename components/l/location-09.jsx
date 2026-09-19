import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o9c4bdc6w.css';
import '../../css/f/frli32bnn.css';
import '../../css/l/ljd34hyaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o9c4bdc6w"/><path class="frli32bnn"/><path class="ljd34hyaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:location-09"} {...others} />);
}

export default Component;
