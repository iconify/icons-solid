import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a0e-esbbh.css';
import '../../css/g/g0lkk6boj.css';
import '../../css/g/g1tth5biz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a0e-esbbh"/><path class="g0lkk6boj"/><path class="g1tth5biz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-preview-01"} {...others} />);
}

export default Component;
