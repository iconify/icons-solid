import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/n5jcoiuik.css';
import '../../css/e/ebhbp_bat.css';
import '../../css/c/cg_4ltbia.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="n5jcoiuik"/><path clip-rule="evenodd" class="ebhbp_bat"/><path class="cg_4ltbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:content-statistic"} {...others} />);
}

export default Component;
