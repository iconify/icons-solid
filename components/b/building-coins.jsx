import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_a77p50x.css';
import '../../css/m/mlhujcbev.css';
import '../../css/n/n7f7_pbpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e_a77p50x"/><path class="mlhujcbev"/><path clip-rule="evenodd" class="n7f7_pbpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:building-coins"} {...others} />);
}

export default Component;
