import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5sup4b7q.css';
import '../../css/z/zdaz92bkn.css';
import '../../css/h/hjjp08bah.css';
import '../../css/d/dkzppqpix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5sup4b7q"/><path class="zdaz92bkn"/><path class="hjjp08bah"/><path class="dkzppqpix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:science-line"} {...others} />);
}

export default Component;
