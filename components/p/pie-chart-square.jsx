import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j97p7et3a.css';
import '../../css/a/ahhlf5tnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j97p7et3a"/><path class="ahhlf5tnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pie-chart-square"} {...others} />);
}

export default Component;
