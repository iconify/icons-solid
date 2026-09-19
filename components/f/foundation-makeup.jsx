import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ya5nrxbvg.css';
import '../../css/e/ekbjwf-nk.css';
import '../../css/c/cvw46tbed.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ya5nrxbvg"/><rect class="ekbjwf-nk"/><path class="cvw46tbed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:foundation-makeup"} {...others} />);
}

export default Component;
