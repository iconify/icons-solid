import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u9bfuyytg.css';
import '../../css/y/yilfabcua.css';
import '../../css/j/j_5zh3bjl.css';
import '../../css/o/o_o8ubb7f.css';
import '../../css/r/rew1fr1zd.css';
import '../../css/x/x1fdc8zzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u9bfuyytg wm-shadow"/><path class="yilfabcua"/><path class="j_5zh3bjl"/><path class="o_o8ubb7f"/><path class="rew1fr1zd"/><path class="x1fdc8zzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:butterfly"} {...others} />);
}

export default Component;
