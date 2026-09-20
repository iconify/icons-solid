import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/baxm99e_z.css';
import '../../css/y/yh4tuubpl.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/seg49pw1p.css';
import '../../css/l/lk5yackzj.css';
import '../../css/z/z4cxhgb-d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="baxm99e_z"/><path class="yh4tuubpl"/><g class="jn8qy4bru"><path class="seg49pw1p"/><path class="lk5yackzj"/></g><path class="z4cxhgb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:earache"} {...others} />);
}

export default Component;
