import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/twruyigrp.css';
import '../../css/j/j4ott5bjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="twruyigrp"/><path class="j4ott5bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-share"} {...others} />);
}

export default Component;
