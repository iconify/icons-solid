import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g6nlogbgx.css';
import '../../css/s/smus0tbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g6nlogbgx"/><path class="smus0tbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:airplane-take-off-01"} {...others} />);
}

export default Component;
