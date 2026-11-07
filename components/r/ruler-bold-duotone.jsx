import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syxr9ro7o.css';
import '../../css/g/gw1678bzd.css';
import '../../css/x/xv1u012ry.css';
import '../../css/i/i4zmraclp.css';
import '../../css/c/ctlol9lzf.css';
import '../../css/k/k1nx9sbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="syxr9ro7o"/><path class="gw1678bzd"/><path class="xv1u012ry"/><path class="i4zmraclp"/><path class="ctlol9lzf"/><path class="k1nx9sbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-bold-duotone"} {...others} />);
}

export default Component;
