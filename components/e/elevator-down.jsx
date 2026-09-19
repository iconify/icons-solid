import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yno5f5g3y.css';
import '../../css/c/c9p4xg47x.css';
import '../../css/r/ru_jirnpc.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="yno5f5g3y"/><g transform="translate(4 1)"><ellipse class="c9p4xg47x"/><path class="ru_jirnpc"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:elevator-down"} {...others} />);
}

export default Component;
