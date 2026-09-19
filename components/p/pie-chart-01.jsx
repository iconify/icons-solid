import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/giasez0sn.css';
import '../../css/n/n9jcxlbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="giasez0sn"/><path class="n9jcxlbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pie-chart-01"} {...others} />);
}

export default Component;
