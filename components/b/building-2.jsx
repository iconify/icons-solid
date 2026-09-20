import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmtd97p-m.css';
import '../../css/q/qeed53eod.css';
import '../../css/s/sg7qc6c0s.css';
import '../../css/c/chm0bvbcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dmtd97p-m"/><path class="qeed53eod"/><path class="sg7qc6c0s"/><path class="chm0bvbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-2"} {...others} />);
}

export default Component;
