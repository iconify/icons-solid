import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t91hoq76b.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/k/k42anccuv.css';
import '../../css/y/yx6lpcbwf.css';
import '../../css/p/p677f4nho.css';
import '../../css/i/i7eycfb2w.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t91hoq76b"/><g class="brzn_0bpr"><path class="k42anccuv"/><path class="yx6lpcbwf"/><path class="p677f4nho"/><circle class="i7eycfb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stick-figure-with-dress-leaning-right"} {...others} />);
}

export default Component;
