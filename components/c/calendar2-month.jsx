import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp-ns1bjr.css';
import '../../css/b/b1e4swiah.css';
import '../../css/x/xwj6wumfs.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="zp-ns1bjr"/><path class="b1e4swiah"/><path class="xwj6wumfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:calendar2-month"} {...others} />);
}

export default Component;
