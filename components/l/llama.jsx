import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlb6a3l8z.css';
import '../../css/i/ih3ngibul.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/dau0ygbea.css';
import '../../css/u/ugmww1bhr.css';
import '../../css/j/jvyq_hbfg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vlb6a3l8z"/><path class="ih3ngibul"/><g class="jn8qy4bru"><path class="dau0ygbea"/><path class="ugmww1bhr"/><path class="jvyq_hbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:llama"} {...others} />);
}

export default Component;
