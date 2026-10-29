import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycyoevbdo.css';
import '../../css/w/wywv2ub3y.css';
import '../../css/k/k_zkfnsfr.css';
import '../../css/u/uaalafb4i.css';
import '../../css/z/zhkw2yunr.css';
import '../../css/w/wbhdh9bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k ycyoevbdo"/><path class="wm-k wywv2ub3y"/><path class="k_zkfnsfr wm-k"/><path class="uaalafb4i wm-a"/><path class="wm-a zhkw2yunr"/><path class="wbhdh9bhm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:japanese-yen"} {...others} />);
}

export default Component;
