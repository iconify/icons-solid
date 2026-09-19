import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0j_heabg.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gotp07far.css';
import '../../css/z/z-z3jx2-y.css';
import '../../css/o/o9jss5kvx.css';
import '../../css/v/vgx4fsbur.css';
import '../../css/d/dq01snbyo.css';
import '../../css/a/a5f1c7ong.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGxzrbFcQm"><path class="u0j_heabg"/></clipPath></defs><g clip-path="url(#SVGxzrbFcQm)" transform="matrix(.86254 0 0 1.0546 -79.5 -8.3)" class="d2kvgvbvc"><path class="gotp07far"/><path class="z-z3jx2-y"/><path class="o9jss5kvx"/><path class="vgx4fsbur"/><path class="dq01snbyo"/><path class="a5f1c7ong"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:kp-1x1"} {...others} />);
}

export default Component;
