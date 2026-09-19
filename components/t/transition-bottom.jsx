import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dujczsbku.css';
import '../../css/w/w4csg3qim.css';
import '../../css/k/keux18blx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dujczsbku"/><path class="w4csg3qim"/><path class="keux18blx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:transition-bottom"} {...others} />);
}

export default Component;
