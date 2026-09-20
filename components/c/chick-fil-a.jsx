import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxhb_hb3z.css';
import '../../css/j/j-psugbjp.css';
import '../../css/f/fodrwybkj.css';

const viewBox = {"width":581.995,"height":263.112};
const content = `<g class="xxhb_hb3z"><path class="j-psugbjp"/><path class="fodrwybkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:chick-fil-a"} {...others} />);
}

export default Component;
