import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yngcailry.css';
import '../../css/t/tv-5nyb5r.css';
import '../../css/a/ab8bavvap.css';
import '../../css/f/fiarxjb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yngcailry"/><path class="tv-5nyb5r wm-shine"/><path class="ab8bavvap wm-k"/><path class="fiarxjb9d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:message-square-plus"} {...others} />);
}

export default Component;
