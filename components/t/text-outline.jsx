import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0szqpn1j.css';
import '../../css/a/a_u_vcn1o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i0szqpn1j"/><path class="a_u_vcn1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:text-outline"} {...others} />);
}

export default Component;
