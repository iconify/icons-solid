import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fksuwacax.css';
import '../../css/m/mo-5z4w7n.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="fksuwacax"/><path class="mo-5z4w7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:arrow-thick-thin-down"} {...others} />);
}

export default Component;
