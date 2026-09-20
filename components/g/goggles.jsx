import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_5xpwxqd.css';
import '../../css/g/gp87-kkrs.css';
import '../../css/t/t4kztubjt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/pgn6ubbtq.css';
import '../../css/a/ao6x-sbqv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="i_5xpwxqd"/><path class="gp87-kkrs"/><path class="t4kztubjt"/><g class="jn8qy4bru"><path class="pgn6ubbtq"/><path class="ao6x-sbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:goggles"} {...others} />);
}

export default Component;
