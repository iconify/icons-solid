import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/viceplbup.css';
import '../../css/c/ctahkw1uo.css';
import '../../css/f/fcms4pbek.css';
import '../../css/w/w7x5ohgrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="viceplbup"/><path class="ctahkw1uo"/><path class="fcms4pbek"/><path class="w7x5ohgrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-outline"} {...others} />);
}

export default Component;
