import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c02klkbfu.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n1rmvq_8i.css';
import '../../css/f/f5gjn8bpc.css';
import '../../css/b/b7tvaq1tq.css';
import '../../css/z/zvb-x3b4b.css';
import '../../css/g/g6dk3ra9v.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGlOZUBeRV"><path class="c02klkbfu"/></clipPath></defs><g clip-path="url(#SVGlOZUBeRV)" transform="translate(82.1)scale(.94)" class="d2kvgvbvc"><path class="n1rmvq_8i"/><path class="f5gjn8bpc"/><path class="b7tvaq1tq"/><path class="zvb-x3b4b"/><path class="g6dk3ra9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:il-4x3"} {...others} />);
}

export default Component;
