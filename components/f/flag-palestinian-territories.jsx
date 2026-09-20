import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/b/b778kib9g.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/s/s__9l0bok.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="b778kib9g"/><path class="u9hq09b6k"/><path class="s__9l0bok"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-palestinian-territories"} {...others} />);
}

export default Component;
