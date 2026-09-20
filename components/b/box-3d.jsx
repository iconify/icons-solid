import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lo7e-wbln.css';
import '../../css/a/azf-tyuln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lo7e-wbln"/><path class="azf-tyuln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d"} {...others} />);
}

export default Component;
