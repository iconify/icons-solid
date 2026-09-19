import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hj7z5ybgc.css';
import '../../css/r/refdwsb5n.css';
import '../../css/i/i1t1lgbyt.css';
import '../../css/b/bp1du6igj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="hj7z5ybgc"/><path class="refdwsb5n"/><path class="i1t1lgbyt"/><path class="bp1du6igj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:donate"} {...others} />);
}

export default Component;
