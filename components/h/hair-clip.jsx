import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hyg7__beq.css';
import '../../css/c/c8fcm6b_c.css';
import '../../css/i/inwqb0b3n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hyg7__beq"/><path class="c8fcm6b_c"/><path class="inwqb0b3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hair-clip"} {...others} />);
}

export default Component;
