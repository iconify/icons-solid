import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/otc11ybpz.css';
import '../../css/q/qx4gc400j.css';
import '../../css/f/fr15c8b3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="otc11ybpz"/><path class="qx4gc400j"/><path class="fr15c8b3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-05"} {...others} />);
}

export default Component;
