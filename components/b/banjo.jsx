import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4obtc3sj.css';
import '../../css/z/z17pz0rnr.css';
import '../../css/u/ul8tgpbeb.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n8nga19gm.css';
import '../../css/d/d081f5j8s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="n4obtc3sj"/><path class="z17pz0rnr"/><circle class="ul8tgpbeb"/><g class="jn8qy4bru"><path class="n8nga19gm"/><circle class="d081f5j8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:banjo"} {...others} />);
}

export default Component;
