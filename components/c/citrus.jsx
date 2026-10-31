import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtytz56ta.css';
import '../../css/q/qc5bgzbyk.css';
import '../../css/c/cvae2cipx.css';
import '../../css/w/w125fbeyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wtytz56ta"/><path class="qc5bgzbyk"/><path class="cvae2cipx"/><path class="w125fbeyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:citrus"} {...others} />);
}

export default Component;
