import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yso2nbc4v.css';
import '../../css/q/qpqtv0b6u.css';
import '../../css/f/fz4zvjbkm.css';
import '../../css/e/e7kz5dnki.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yso2nbc4v"/><path class="qpqtv0b6u"/><path class="fz4zvjbkm"/><path class="e7kz5dnki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flag-1-bold"} {...others} />);
}

export default Component;
