import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/z/zwg5l9bqd.css';
import '../../css/g/gpshwxbdw.css';
import '../../css/w/w581z2bzw.css';
import '../../css/r/r5h-zqbkb.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="zwg5l9bqd"/><g class="gpshwxbdw"><path class="w581z2bzw"/><path class="r5h-zqbkb"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-norfolk-island"} {...others} />);
}

export default Component;
