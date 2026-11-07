import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn_f1tn5f.css';
import '../../css/d/ddsunemne.css';
import '../../css/h/htpdpeg8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gn_f1tn5f"/><path class="ddsunemne"/><path class="htpdpeg8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stream-bold-duotone"} {...others} />);
}

export default Component;
