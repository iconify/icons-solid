import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q77p87buw.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/l/lvhtau_sh.css';
import '../../css/m/mlqtv-6km.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q77p87buw"/><g class="kdz4acc8r"><path class="lvhtau_sh"/><path class="mlqtv-6km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bust-in-silhouette"} {...others} />);
}

export default Component;
