import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x_ze_6num.css';
import '../../css/c/colzh71fi.css';
import '../../css/d/dzmqt9bpj.css';
import '../../css/z/zwvnm1o0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k x_ze_6num"/><path class="colzh71fi"/><path class="dzmqt9bpj"/><path class="wm-s zwvnm1o0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:gavel"} {...others} />);
}

export default Component;
