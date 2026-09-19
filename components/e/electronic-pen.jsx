import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tb64df4eu.css';
import '../../css/a/alt68kdnd.css';
import '../../css/c/cj00blbpa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(45 35.193 5.322)" class="tb64df4eu"/><path class="alt68kdnd"/><rect transform="rotate(30 33.268 12.34)" class="cj00blbpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:electronic-pen"} {...others} />);
}

export default Component;
