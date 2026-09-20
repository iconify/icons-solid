import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dukzfrx0n.css';
import '../../css/p/p32ilb6_l.css';
import '../../css/a/anjjidc8s.css';
import '../../css/f/f4i00ubtm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dukzfrx0n"/><path class="p32ilb6_l"/><path class="anjjidc8s"/><path class="f4i00ubtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:bank-duo"} {...others} />);
}

export default Component;
