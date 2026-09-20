import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9pq-abme.css';
import '../../css/i/i9lmwgbsb.css';
import '../../css/c/cxyg_zbqp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f1hodz7-e.css';
import '../../css/e/e9evbnnhw.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="k9pq-abme"><path class="i9lmwgbsb"/><path class="cxyg_zbqp"/></g><g class="jn8qy4bru"><path class="f1hodz7-e"/><path class="e9evbnnhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leg-medium-skin-tone"} {...others} />);
}

export default Component;
