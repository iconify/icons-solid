import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t2zg64gut.css';
import '../../css/q/qucp4gbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="t2zg64gut"/><path class="qucp4gbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:student-card"} {...others} />);
}

export default Component;
