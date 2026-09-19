import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y0fibjbln.css';
import '../../css/b/bfkn6jbjx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="y0fibjbln"/><path class="bfkn6jbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:receipt-cutoff"} {...others} />);
}

export default Component;
