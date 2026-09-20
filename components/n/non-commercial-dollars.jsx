import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yo512ub_k.css';
import '../../css/g/gv3m1vp7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yo512ub_k"/><path class="gv3m1vp7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:non-commercial-dollars"} {...others} />);
}

export default Component;
