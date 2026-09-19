import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m286f_qbu.css';
import '../../css/m/mkv27kkfu.css';
import '../../css/i/ikqw28z5l.css';
import '../../css/t/t_yqvvbrg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="m286f_qbu"/><path class="mkv27kkfu"/><path class="ikqw28z5l"/><path class="t_yqvvbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rolling-eyes"} {...others} />);
}

export default Component;
