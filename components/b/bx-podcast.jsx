import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz3f5jbrh.css';
import '../../css/y/yszcp8i3o.css';
import '../../css/b/bhdojms-k.css';
import '../../css/m/mj_kz-61s.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="dz3f5jbrh"/><path class="yszcp8i3o"/><path class="bhdojms-k"/><path class="mj_kz-61s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-podcast"} {...others} />);
}

export default Component;
