import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx-u_nb3c.css';
import '../../css/j/j2velpbld.css';
import '../../css/c/ceojaobrb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kx-u_nb3c"/><path class="j2velpbld"/><path class="ceojaobrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-today"} {...others} />);
}

export default Component;
