import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gzan0ibzy.css';
import '../../css/i/iufs_r29h.css';
import '../../css/a/at_81ebpk.css';
import '../../css/y/yn2cyvv6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gzan0ibzy"/><path class="iufs_r29h"/><path class="at_81ebpk"/><path class="yn2cyvv6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-broken"} {...others} />);
}

export default Component;
