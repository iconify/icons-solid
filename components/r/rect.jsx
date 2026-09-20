import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djmor1xwt.css';
import '../../css/r/r0dndstuf.css';
import '../../css/s/s6u7mybjl.css';
import '../../css/z/zc3_-gfsp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="djmor1xwt"/><path class="r0dndstuf"/><path class="s6u7mybjl"/><path class="zc3_-gfsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rect"} {...others} />);
}

export default Component;
