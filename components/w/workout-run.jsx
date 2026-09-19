import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rghr3-blq.css';
import '../../css/d/d9x0rdbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rghr3-blq"/><path class="d9x0rdbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workout-run"} {...others} />);
}

export default Component;
