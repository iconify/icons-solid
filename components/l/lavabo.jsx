import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vf295n69d.css';
import '../../css/z/z9opg52kw.css';
import '../../css/r/r19h5x0po.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="vf295n69d"/><path class="z9opg52kw"/><path class="r19h5x0po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:lavabo"} {...others} />);
}

export default Component;
