import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ilsqdcbkx.css';
import '../../css/e/eoa-gxb8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ilsqdcbkx"/><path class="eoa-gxb8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chart-network"} {...others} />);
}

export default Component;
