import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/t/t69swu23k.css';
import '../../css/g/gn4hu1bwb.css';
import '../../css/g/gzz4jvbaq.css';
import '../../css/a/aqm3wwe6k.css';
import '../../css/n/nqqhr_byf.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="t69swu23k"/><path class="gn4hu1bwb"/><g class="gzz4jvbaq"><path class="aqm3wwe6k"/><path class="nqqhr_byf"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-malaysia"} {...others} />);
}

export default Component;
