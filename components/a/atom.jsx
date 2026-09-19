import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a8yocrbjl.css';
import '../../css/q/qbxa08-op.css';
import '../../css/d/dwzk6j57p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><ellipse transform="rotate(45)" class="a8yocrbjl"/><ellipse transform="rotate(315)" class="qbxa08-op"/><path class="dwzk6j57p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:atom"} {...others} />);
}

export default Component;
