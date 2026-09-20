import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/z/zl_pvgz9v.css';
import '../../css/p/pi-o0dbdb.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="zl_pvgz9v"/><path class="pi-o0dbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:box-download"} {...others} />);
}

export default Component;
