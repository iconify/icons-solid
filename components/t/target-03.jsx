import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/p-73e3z9e.css';
import '../../css/q/q7jercbhh.css';
import '../../css/h/hzpl-vbrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="p-73e3z9e"/><path class="q7jercbhh"/><path class="hzpl-vbrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:target-03"} {...others} />);
}

export default Component;
