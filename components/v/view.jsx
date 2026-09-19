import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w926o55vd.css';
import '../../css/u/uw8o1qbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w926o55vd"/><path class="uw8o1qbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:view"} {...others} />);
}

export default Component;
