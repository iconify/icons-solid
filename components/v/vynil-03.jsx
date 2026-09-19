import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/y/y4b9vrbvh.css';
import '../../css/f/fi4495bnn.css';
import '../../css/e/e5am3-hzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jvtjbnueh"/><path class="y4b9vrbvh"/><path class="fi4495bnn"/><path class="e5am3-hzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vynil-03"} {...others} />);
}

export default Component;
