import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aljy8pzsg.css';
import '../../css/k/kyz9drbys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aljy8pzsg"/><path class="kyz9drbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corporate"} {...others} />);
}

export default Component;
