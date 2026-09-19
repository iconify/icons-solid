import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3uoe7q6g.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/b/b3rjkobkf.css';
import '../../css/u/ueu19qavt.css';
import '../../css/r/rq-ue_btb.css';
import '../../css/r/r1madzbnz.css';
import '../../css/m/m9ytu3b1k.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGCqI8Ycmq"><path class="i3uoe7q6g"/></clipPath></defs><g clip-path="url(#SVGCqI8Ycmq)" transform="translate(0 48)" class="nv9qcacyl"><path class="b3rjkobkf"/><path class="ueu19qavt"/><path class="rq-ue_btb"/><path class="r1madzbnz"/><path class="m9ytu3b1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gm-4x3"} {...others} />);
}

export default Component;
