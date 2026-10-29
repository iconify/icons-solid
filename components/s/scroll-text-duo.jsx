import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uv7s600ds.css';
import '../../css/u/uc0yabbtt.css';
import '../../css/j/j5ep5hbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uv7s600ds"/><path class="uc0yabbtt wm-a"/><path class="j5ep5hbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scroll-text-duo"} {...others} />);
}

export default Component;
