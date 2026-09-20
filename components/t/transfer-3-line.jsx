import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmu8so9_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pmu8so9_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:transfer-3-line"} {...others} />);
}

export default Component;
