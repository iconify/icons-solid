import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rbq_0qdep.css';
import '../../css/b/boxbhb0ua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rbq_0qdep"/><path class="boxbhb0ua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:save-energy-01"} {...others} />);
}

export default Component;
