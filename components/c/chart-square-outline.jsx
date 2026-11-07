import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-l_t8zlt.css';
import '../../css/e/e-_t4f13s.css';
import '../../css/t/tf373tbqk.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-l_t8zlt"/><path class="e-_t4f13s"/><path class="tf373tbqk"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-square-outline"} {...others} />);
}

export default Component;
