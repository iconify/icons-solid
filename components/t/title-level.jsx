import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/j/jnmm7-kdb.css';
import '../../css/w/wld8d01cv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="jnmm7-kdb"/><path class="wld8d01cv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:title-level"} {...others} />);
}

export default Component;
