import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0j3xu4rw.css';
import '../../css/h/hnd2g735k.css';
import '../../css/o/oa0gdcb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0j3xu4rw"/><path class="hnd2g735k"/><path class="oa0gdcb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-horizontal-bold-duotone"} {...others} />);
}

export default Component;
