import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q41sffd_i.css';
import '../../css/p/pmn3hkbsz.css';
import '../../css/y/yd340rbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q41sffd_i"/><path class="pmn3hkbsz"/><path class="yd340rbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:zoom-out-magnifier-1"} {...others} />);
}

export default Component;
