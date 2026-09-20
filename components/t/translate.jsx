import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/v/v7y0zackt.css';
import '../../css/e/edk22ibmj.css';
import '../../css/a/aer981g6j.css';
import '../../css/z/zdy_qebhw.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="v7y0zackt"/><path class="edk22ibmj"/><path class="aer981g6j"/><path class="zdy_qebhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:translate"} {...others} />);
}

export default Component;
