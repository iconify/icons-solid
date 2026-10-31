import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zhmwyit1u.css';
import '../../css/y/ydpricbru.css';
import '../../css/r/rc64yi9ng.css';
import '../../css/a/awagnsc9l.css';
import '../../css/l/lt8ynzbhm.css';
import '../../css/e/ero13m9ft.css';
import '../../css/s/s_yvpibpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zhmwyit1u"/><path class="ydpricbru"/><path class="rc64yi9ng"/><path class="awagnsc9l"/><path class="lt8ynzbhm"/><path class="ero13m9ft wm-s"/><path class="s_yvpibpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:witch-hat"} {...others} />);
}

export default Component;
