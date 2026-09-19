import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/s/sx_geyq0r.css';
import '../../css/x/xdic9xigr.css';
import '../../css/u/u3h0sfbgw.css';
import '../../css/e/erpbjfjed.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="sx_geyq0r"><path class="xdic9xigr"/><path class="u3h0sfbgw"/><path class="erpbjfjed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:fo-1x1"} {...others} />);
}

export default Component;
