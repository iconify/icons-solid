import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uwwy2wbpf.css';
import '../../css/q/q6eelcchj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uwwy2wbpf"/><path class="q6eelcchj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gpu"} {...others} />);
}

export default Component;
