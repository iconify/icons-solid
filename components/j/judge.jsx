import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zc1vi2b-v.css';
import '../../css/b/bi7l6m0-g.css';
import '../../css/y/ydvxzi99r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zc1vi2b-v"/><path class="bi7l6m0-g"/><path class="ydvxzi99r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:judge"} {...others} />);
}

export default Component;
