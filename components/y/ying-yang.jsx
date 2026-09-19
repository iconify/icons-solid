import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g63mxooxl.css';
import '../../css/f/f0p3izb7e.css';

const viewBox = {"width":17,"height":17};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><path class="g63mxooxl"/><ellipse class="f0p3izb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:ying-yang"} {...others} />);
}

export default Component;
