import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imgvunrkc.css';
import '../../css/y/yv5-v41jc.css';
import '../../css/o/odtolfb4p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/u-ct7lbbk.css';
import '../../css/p/p6nqpxbow.css';
import '../../css/a/a7mo5iq9j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="imgvunrkc"/><path class="yv5-v41jc"/><path class="odtolfb4p"/><g class="jn8qy4bru"><path class="u-ct7lbbk"/><path class="p6nqpxbow"/><path class="a7mo5iq9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cockroach"} {...others} />);
}

export default Component;
