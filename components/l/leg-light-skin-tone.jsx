import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq1bfqbrr.css';
import '../../css/i/i9lmwgbsb.css';
import '../../css/p/pk93nba9w.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f1hodz7-e.css';
import '../../css/e/e9evbnnhw.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="hq1bfqbrr"><path class="i9lmwgbsb"/><path class="pk93nba9w"/></g><g class="jn8qy4bru"><path class="f1hodz7-e"/><path class="e9evbnnhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leg-light-skin-tone"} {...others} />);
}

export default Component;
