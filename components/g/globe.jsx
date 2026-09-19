import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uuheow30q.css';
import '../../css/q/qxcfuszic.css';
import '../../css/n/n5pbi4u5l.css';
import '../../css/n/naq3n-bhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uuheow30q"/><circle transform="matrix(-1 0 0 1 20.5 2)" class="qxcfuszic"/><path class="n5pbi4u5l"/><path class="naq3n-bhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:globe"} {...others} />);
}

export default Component;
