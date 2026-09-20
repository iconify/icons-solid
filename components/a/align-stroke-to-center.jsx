import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/t-6yolbrn.css';
import '../../css/a/ai8_npn0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="t-6yolbrn"/><path class="ai8_npn0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:align-stroke-to-center"} {...others} />);
}

export default Component;
