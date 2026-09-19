import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b8foahb1z.css';
import '../../css/g/gr1b9bf-n.css';
import '../../css/j/j1c3e2h6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b8foahb1z"/><path class="gr1b9bf-n"/><path class="j1c3e2h6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tablet-pen"} {...others} />);
}

export default Component;
