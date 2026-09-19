import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/km5f2b9ps.css';
import '../../css/s/sefvbv26e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="km5f2b9ps"/><path class="sefvbv26e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-block"} {...others} />);
}

export default Component;
