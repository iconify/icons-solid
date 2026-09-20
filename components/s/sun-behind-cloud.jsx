import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzpyg8fjx.css';
import '../../css/f/fmfzdq6xq.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/s/sgeku9b-o.css';
import '../../css/e/eevyitx0o.css';
import '../../css/k/kr-2gnp6m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hzpyg8fjx"/><path class="fmfzdq6xq"/><g class="doj9dq_jg"><path class="sgeku9b-o"/><path class="eevyitx0o"/><path class="kr-2gnp6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sun-behind-cloud"} {...others} />);
}

export default Component;
