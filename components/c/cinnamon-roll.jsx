import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pxy5wxb2o.css';
import '../../css/h/h2tkw0b0p.css';
import '../../css/k/kqlaetbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pxy5wxb2o"/><path class="h2tkw0b0p"/><path class="kqlaetbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cinnamon-roll"} {...others} />);
}

export default Component;
