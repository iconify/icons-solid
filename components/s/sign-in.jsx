import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyy18ib3e.css';
import '../../css/h/h5emsl81x.css';
import '../../css/a/ay4nvtb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zyy18ib3e"/><path class="h5emsl81x"/><path class="ay4nvtb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sign-in"} {...others} />);
}

export default Component;
