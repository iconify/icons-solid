import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0fwv-vzz.css';
import '../../css/e/el-qg0b0m.css';
import '../../css/g/gn48l6_0j.css';
import '../../css/j/jmr1gwbiu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g0fwv-vzz"/><path class="el-qg0b0m"/><path class="gn48l6_0j"/><path class="jmr1gwbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:investing-and-banking"} {...others} />);
}

export default Component;
