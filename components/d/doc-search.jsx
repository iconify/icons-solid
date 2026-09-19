import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k0n-ptb0u.css';
import '../../css/c/cp5t-n2_r.css';
import '../../css/y/ysqi2pc_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k0n-ptb0u"/><path class="cp5t-n2_r"/><path class="ysqi2pc_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:doc-search"} {...others} />);
}

export default Component;
