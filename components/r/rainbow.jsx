import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwhf0db-z.css';
import '../../css/d/d18ycsb5v.css';
import '../../css/w/wov5-s89s.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="pwhf0db-z"/><path class="d18ycsb5v"/><path class="wov5-s89s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:rainbow"} {...others} />);
}

export default Component;
