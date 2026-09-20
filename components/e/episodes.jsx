import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/a/a7kmjvbvt.css';
import '../../css/l/l0yw3t1ep.css';
import '../../css/e/eehirac9b.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="a7kmjvbvt"/><path class="l0yw3t1ep"/><path class="eehirac9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:episodes"} {...others} />);
}

export default Component;
