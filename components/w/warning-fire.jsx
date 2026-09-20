import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b388tqbpo.css';
import '../../css/b/b2d6gbumb.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/l/lm167jk3k.css';
import '../../css/u/uyra6bb4c.css';
import '../../css/b/bmttc3b2s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b388tqbpo"/><path class="b2d6gbumb"/><g class="jn8qy4bru"><path class="lm167jk3k"/><path class="uyra6bb4c"/><path class="bmttc3b2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:warning-fire"} {...others} />);
}

export default Component;
