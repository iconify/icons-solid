import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f2_0pzb1i.css';
import '../../css/n/nvvzh7gci.css';
import '../../css/f/fl81m1b7u.css';
import '../../css/x/xs8wlqfph.css';
import '../../css/c/cve__fbjc.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="f2_0pzb1i wm-shadow"/><path class="nvvzh7gci"/><path class="fl81m1b7u"/><path class="xs8wlqfph"/><path class="cve__fbjc wm-shine"/><path class="akvr8ibym wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevron-first"} {...others} />);
}

export default Component;
