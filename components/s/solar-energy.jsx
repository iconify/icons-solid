import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnb6oiblm.css';
import '../../css/r/rreybl3mq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/i-d783b6j.css';
import '../../css/w/w2kqwju0b.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnb6oiblm"/><circle class="rreybl3mq"/><g class="jn8qy4bru"><path class="i-d783b6j"/><circle class="w2kqwju0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:solar-energy"} {...others} />);
}

export default Component;
