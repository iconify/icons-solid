import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tm5mzib6s.css';
import '../../css/g/ge30fj9tu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tm5mzib6s"/><path class="ge30fj9tu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-radar"} {...others} />);
}

export default Component;
