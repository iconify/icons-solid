import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vhkfc2xes.css';
import '../../css/q/qb_przbzh.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="vhkfc2xes"/><path class="qb_przbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:badge-name"} {...others} />);
}

export default Component;
