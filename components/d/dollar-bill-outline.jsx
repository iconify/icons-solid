import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gdklhuebv.css';
import '../../css/o/ouwye0b8s.css';
import '../../css/f/f5w20rbat.css';
import '../../css/h/hrlhvxdnc.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gdklhuebv"/><path class="ouwye0b8s"/><path class="f5w20rbat"/><path class="hrlhvxdnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dollar-bill-outline"} {...others} />);
}

export default Component;
