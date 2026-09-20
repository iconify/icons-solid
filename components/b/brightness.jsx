import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qy4e2ebar.css';
import '../../css/p/pl52h0b1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="qy4e2ebar"/><path class="pl52h0b1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:brightness"} {...others} />);
}

export default Component;
