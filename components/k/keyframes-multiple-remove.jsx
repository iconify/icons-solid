import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmmfarjhc.css';
import '../../css/e/e7pgrp-wx.css';
import '../../css/v/vpo7fxqls.css';
import '../../css/a/aarbjq8mj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kmmfarjhc"/><path class="e7pgrp-wx"/><path class="vpo7fxqls"/><path class="aarbjq8mj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframes-multiple-remove"} {...others} />);
}

export default Component;
