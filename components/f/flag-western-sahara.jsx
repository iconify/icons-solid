import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/r/r73utib8z.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/s/s__9l0bok.css';
import '../../css/a/a2r_2abvt.css';
import '../../css/u/u1nrsybzr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="r73utib8z"/><path class="u9hq09b6k"/><path class="s__9l0bok"/><path class="a2r_2abvt"/><path class="u1nrsybzr"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-western-sahara"} {...others} />);
}

export default Component;
