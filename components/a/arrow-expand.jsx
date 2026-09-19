import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/farv-6boo.css';
import '../../css/e/eqvtu_rht.css';
import '../../css/o/orqmh4n-s.css';
import '../../css/d/dn65s6b8u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="farv-6boo"/><path class="eqvtu_rht"/><path class="orqmh4n-s"/><path class="dn65s6b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-expand"} {...others} />);
}

export default Component;
