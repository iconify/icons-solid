import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/mp-x5krpf.css';
import '../../css/j/jh_olinoe.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="mp-x5krpf"/><path class="jh_olinoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:link-alt"} {...others} />);
}

export default Component;
