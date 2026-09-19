import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ufljtw8pg.css';
import '../../css/a/aduav3ayg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ufljtw8pg"/><path class="aduav3ayg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chevron-double-down"} {...others} />);
}

export default Component;
