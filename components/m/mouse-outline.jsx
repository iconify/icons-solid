import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yv5nmtbub.css';
import '../../css/o/ou1ioiq0r.css';
import '../../css/v/vtzfhcinh.css';
import '../../css/h/hdbvy6x6y.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yv5nmtbub"/><path class="ou1ioiq0r"/><path class="vtzfhcinh"/><path class="hdbvy6x6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mouse-outline"} {...others} />);
}

export default Component;
