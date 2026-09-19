import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j-kfwwbil.css';
import '../../css/v/vd-k9xnac.css';

const viewBox = {"width":17,"height":17};
const content = `<g transform="translate(.995 2.98)" class="n1lsf0bnc"><circle class="j-kfwwbil"/><path class="vd-k9xnac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:camera"} {...others} />);
}

export default Component;
