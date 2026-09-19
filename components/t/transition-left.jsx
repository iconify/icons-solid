import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kds9smf3q.css';
import '../../css/n/nrg0twbrt.css';
import '../../css/y/y_r1fbgtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kds9smf3q"/><path class="nrg0twbrt"/><path class="y_r1fbgtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:transition-left"} {...others} />);
}

export default Component;
