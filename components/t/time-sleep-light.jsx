import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/v/vi-85-brg.css';
import '../../css/f/f4tt_yjqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="hwsal5q-o"/><path class="vi-85-brg"/><path class="f4tt_yjqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:time-sleep-light"} {...others} />);
}

export default Component;
