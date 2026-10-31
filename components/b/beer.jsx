import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mn56eubrm.css';
import '../../css/c/cnv66pbtf.css';
import '../../css/j/jbq0mbbpz.css';
import '../../css/u/u3u0yrb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mn56eubrm wm-shadow"/><path class="cnv66pbtf wm-shadow"/><path class="jbq0mbbpz"/><path class="u3u0yrb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:beer"} {...others} />);
}

export default Component;
