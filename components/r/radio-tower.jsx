import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hzp9bvryf.css';
import '../../css/u/umnmhib_r.css';
import '../../css/i/iib4vtwgi.css';
import '../../css/g/g9c4kbcfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="hzp9bvryf"/><path class="umnmhib_r wm-k"/><path class="iib4vtwgi wm-a"/><path class="g9c4kbcfl wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:radio-tower"} {...others} />);
}

export default Component;
