import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpsiiab0r.css';
import '../../css/d/d7_180b7h.css';
import '../../css/w/wfgsbdqrb.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/snafz5gzs.css';
import '../../css/i/i6ch20b2k.css';
import '../../css/i/iy2yq0rld.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dpsiiab0r"><path class="d7_180b7h"/><path class="wfgsbdqrb"/></g><g class="jn8qy4bru"><path class="snafz5gzs"/><path class="i6ch20b2k"/><path class="iy2yq0rld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-cat"} {...others} />);
}

export default Component;
