import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxow2pgrp.css';
import '../../css/t/ta0m-4b6a.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};
const content = `<g class="cuyn6tgcc"><path class="lxow2pgrp"/><path class="ta0m-4b6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:stackoverflow"} {...others} />);
}

export default Component;
