import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwr66yb9v.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s5sv6wy0s.css';
import '../../css/m/m81_pzban.css';
import '../../css/z/zz220ac7q.css';
import '../../css/x/xn-ciab1l.css';
import '../../css/k/kjndr8bml.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bwr66yb9v"/><g class="jn8qy4bru"><path class="s5sv6wy0s"/><path class="m81_pzban"/><path class="zz220ac7q"/><path class="xn-ciab1l"/><path class="kjndr8bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:keycap-hash"} {...others} />);
}

export default Component;
