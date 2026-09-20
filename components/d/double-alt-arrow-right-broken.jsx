import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zjnva_byo.css';
import '../../css/g/ggrp1gbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zjnva_byo"/><path class="ggrp1gbkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-right-broken"} {...others} />);
}

export default Component;
