import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzibxeopw.css';
import '../../css/o/osemxebgc.css';
import '../../css/o/ocb7_jb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qzibxeopw"/><path clip-rule="evenodd" class="osemxebgc"/><path class="ocb7_jb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-low-minimalistic-outline"} {...others} />);
}

export default Component;
