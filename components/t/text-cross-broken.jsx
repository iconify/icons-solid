import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jlgxs8iqx.css';
import '../../css/o/o-tvj_5su.css';
import '../../css/y/y0cxd-7om.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jlgxs8iqx"/><path class="o-tvj_5su"/><path class="y0cxd-7om"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-cross-broken"} {...others} />);
}

export default Component;
