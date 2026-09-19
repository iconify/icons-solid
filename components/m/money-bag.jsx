import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sf1jevb9v.css';
import '../../css/s/sqv8k3-tw.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="sf1jevb9v"/><path class="sqv8k3-tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:money-bag"} {...others} />);
}

export default Component;
