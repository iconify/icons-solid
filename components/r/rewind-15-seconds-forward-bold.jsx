import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vpbwpqkog.css';
import '../../css/n/n5mi1zbsm.css';
import '../../css/a/aqrm7ib2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vpbwpqkog"/><path class="n5mi1zbsm"/><path class="aqrm7ib2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-15-seconds-forward-bold"} {...others} />);
}

export default Component;
