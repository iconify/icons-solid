import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uyt_djohm.css';
import '../../css/f/fcxckcc5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uyt_djohm"/><path class="fcxckcc5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layout-bottom"} {...others} />);
}

export default Component;
