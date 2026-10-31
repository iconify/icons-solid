import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzpukk32h.css';
import '../../css/g/gl1ef7hql.css';
import '../../css/w/wa3ur0y_k.css';
import '../../css/e/eqr4zqbto.css';
import '../../css/i/in6uzubyv.css';
import '../../css/u/uj-939bdy.css';
import '../../css/i/icadev9dk.css';
import '../../css/p/pzs_6ab4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xzpukk32h"/><path class="gl1ef7hql wm-a"/><path class="wa3ur0y_k wm-deco"/><path class="eqr4zqbto wm-k"/><path class="in6uzubyv wm-a"/><path class="uj-939bdy wm-shadow"/><path class="icadev9dk wm-shine"/><path class="pzs_6ab4x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:firecracker"} {...others} />);
}

export default Component;
