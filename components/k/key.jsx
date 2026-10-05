import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d3i_osbsh.css';
import '../../css/s/skxoanbei.css';
import '../../css/h/hzgt60rqb.css';
import '../../css/y/ypowfxgrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="d3i_osbsh"/><path class="skxoanbei"/><path class="hzgt60rqb"/><path class="ypowfxgrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:key"} {...others} />);
}

export default Component;
