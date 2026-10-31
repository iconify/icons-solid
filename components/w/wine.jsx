import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eb7pf9bgu.css';
import '../../css/j/jzh2b1iqg.css';
import '../../css/a/azerz7bih.css';
import '../../css/b/bz_jzhbjq.css';
import '../../css/q/q8d7lubuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="eb7pf9bgu wm-shadow"/><path class="jzh2b1iqg"/><path class="azerz7bih"/><path class="bz_jzhbjq"/><path class="q8d7lubuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wine"} {...others} />);
}

export default Component;
