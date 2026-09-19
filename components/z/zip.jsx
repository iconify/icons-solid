import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/ssgg78swb.css';
import '../../css/r/rk5qygbpc.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="ssgg78swb"/><path class="rk5qygbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:zip"} {...others} />);
}

export default Component;
