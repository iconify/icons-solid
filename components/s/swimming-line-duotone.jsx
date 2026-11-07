import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zob7utbzb.css';
import '../../css/t/tmnt0-fuj.css';
import '../../css/u/uoxjs6bit.css';
import '../../css/a/at_81ebpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zob7utbzb"/><path class="tmnt0-fuj"/><path class="uoxjs6bit"/><path class="at_81ebpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-line-duotone"} {...others} />);
}

export default Component;
