import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sknh1b5ip.css';
import '../../css/u/ucz8q6b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sknh1b5ip"/><path class="ucz8q6b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flow-circle"} {...others} />);
}

export default Component;
