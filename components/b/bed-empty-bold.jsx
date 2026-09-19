import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/i/i-tx87z2y.css';
import '../../css/u/utx3fabgz.css';
import '../../css/z/zu6-50bas.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><rect class="i-tx87z2y"/><path class="utx3fabgz"/><path class="zu6-50bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bed-empty-bold"} {...others} />);
}

export default Component;
