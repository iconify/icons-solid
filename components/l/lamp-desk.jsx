import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gk76gpujr.css';
import '../../css/s/sitli9irb.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="gk76gpujr"/><path class="sitli9irb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:lamp-desk"} {...others} />);
}

export default Component;
