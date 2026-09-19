import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ehoj_i-_j.css';
import '../../css/p/pt7do2-ho.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ehoj_i-_j"/><path class="pt7do2-ho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diamond-necklace"} {...others} />);
}

export default Component;
