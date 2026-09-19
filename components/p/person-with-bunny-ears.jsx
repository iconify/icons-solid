import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xi2bsbbsx.css';
import '../../css/y/y_hyl6rgz.css';
import '../../css/y/ya5lcoltx.css';
import '../../css/a/a3xckwbcu.css';
import '../../css/h/hr242gbbt.css';
import '../../css/s/s8t-vmnyh.css';
import '../../css/i/ig0o2yt2g.css';
import '../../css/t/t1z5fe0qk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xi2bsbbsx"/><path clip-rule="evenodd" class="y_hyl6rgz"/><path class="ya5lcoltx"/><path class="a3xckwbcu"/><path class="hr242gbbt"/><path clip-rule="evenodd" class="s8t-vmnyh"/><path class="ig0o2yt2g"/><path class="t1z5fe0qk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-with-bunny-ears"} {...others} />);
}

export default Component;
