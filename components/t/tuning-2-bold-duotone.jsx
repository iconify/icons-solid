import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tvd5eoqrw.css';
import '../../css/r/rxuwlx1ct.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rmfkw9bns.css';
import '../../css/b/bh4awnbzk.css';
import '../../css/r/ro_trobcb.css';
import '../../css/i/ikzl0k6ol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tvd5eoqrw"/><path class="rxuwlx1ct"/><g class="mc2zb0bvp"><path class="rmfkw9bns"/><path class="bh4awnbzk"/><path class="ro_trobcb"/><path class="ikzl0k6ol"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-2-bold-duotone"} {...others} />);
}

export default Component;
