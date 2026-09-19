import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i39swlb4j.css';
import '../../css/w/w76zkvm7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i39swlb4j"/><path class="w76zkvm7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:diamond-02"} {...others} />);
}

export default Component;
