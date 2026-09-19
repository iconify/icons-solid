import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nvjgaobrz.css';
import '../../css/u/uko0s9blw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="nvjgaobrz"/><path class="uko0s9blw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dashboard-speed-02"} {...others} />);
}

export default Component;
