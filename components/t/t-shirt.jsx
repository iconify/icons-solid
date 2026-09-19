import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a1d9gzssy.css';
import '../../css/w/wthtsqq1n.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="a1d9gzssy"/><path class="wthtsqq1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:t-shirt"} {...others} />);
}

export default Component;
