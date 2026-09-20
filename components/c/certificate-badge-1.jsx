import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eljz2sbcz.css';
import '../../css/r/rdhz0000q.css';
import '../../css/t/t4ebpfb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eljz2sbcz"/><path class="rdhz0000q"/><path clip-rule="evenodd" class="t4ebpfb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:certificate-badge-1"} {...others} />);
}

export default Component;
