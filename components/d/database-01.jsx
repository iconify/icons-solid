import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/ge1-1_s5m.css';
import '../../css/z/z9bb_p1jb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ge1-1_s5m"/><path class="z9bb_p1jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database-01"} {...others} />);
}

export default Component;
