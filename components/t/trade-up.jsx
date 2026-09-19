import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qe4nt8bqt.css';
import '../../css/y/yirvmob5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qe4nt8bqt"/><path class="yirvmob5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trade-up"} {...others} />);
}

export default Component;
