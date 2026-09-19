import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo_qwjrtd.css';
import '../../css/a/ad6uu_b7l.css';
import '../../css/z/zp0o_6cpw.css';
import '../../css/d/dj5hahi0o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oo_qwjrtd"/><path class="ad6uu_b7l"/><path class="zp0o_6cpw"/><path class="dj5hahi0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-sad"} {...others} />);
}

export default Component;
