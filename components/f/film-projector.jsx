import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9ihkv15p.css';
import '../../css/j/jfz-g1b2k.css';
import '../../css/w/wjj4lfbpx.css';
import '../../css/e/ep55ak_mq.css';
import '../../css/e/e7kxppb4x.css';
import '../../css/d/d0b1p8bkb.css';
import '../../css/q/qb71_1b9s.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s5b6ekbsy.css';
import '../../css/a/ay3dunb2d.css';
import '../../css/n/nu25u8boh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h9ihkv15p"/><path class="jfz-g1b2k"/><path class="wjj4lfbpx"/><path class="ep55ak_mq"/><path class="e7kxppb4x"/><path class="d0b1p8bkb"/><path class="qb71_1b9s"/><g class="jn8qy4bru"><path class="s5b6ekbsy"/><path class="ay3dunb2d"/><path class="nu25u8boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:film-projector"} {...others} />);
}

export default Component;
