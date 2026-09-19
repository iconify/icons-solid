import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n1rmvq_8i.css';
import '../../css/f/f5gjn8bpc.css';
import '../../css/b/b7tvaq1tq.css';
import '../../css/z/zvb-x3b4b.css';
import '../../css/g/g6dk3ra9v.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="d2kvgvbvc"><path class="n1rmvq_8i"/><path class="f5gjn8bpc"/><path class="b7tvaq1tq"/><path class="zvb-x3b4b"/><path class="g6dk3ra9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:il-1x1"} {...others} />);
}

export default Component;
