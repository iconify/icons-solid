import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tokyw_wee.css';
import '../../css/d/d-e_uzblj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tokyw_wee"/><path class="d-e_uzblj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rotation"} {...others} />);
}

export default Component;
