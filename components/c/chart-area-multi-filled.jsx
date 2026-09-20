import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrbyzachg.css';
import '../../css/p/p5hooobjg.css';
import '../../css/l/lz3_q5bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrbyzachg"/><path class="p5hooobjg"/><path class="lz3_q5bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-area-multi-filled"} {...others} />);
}

export default Component;
