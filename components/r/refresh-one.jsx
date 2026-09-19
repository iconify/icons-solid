import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rz9t_0bws.css';
import '../../css/r/r-mrtlb8m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect transform="rotate(-45 17 24.071)" class="rz9t_0bws"/><path class="r-mrtlb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:refresh-one"} {...others} />);
}

export default Component;
