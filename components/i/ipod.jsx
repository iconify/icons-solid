import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rmp5hgbqp.css';
import '../../css/d/dfbuaacdd.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(4)" class="n1lsf0bnc"><ellipse class="rmp5hgbqp"/><path class="dfbuaacdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:ipod"} {...others} />);
}

export default Component;
