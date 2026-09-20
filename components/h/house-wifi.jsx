import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r0duf20se.css';
import '../../css/q/qc-qo0m-p.css';
import '../../css/z/zj7k2wm3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r0duf20se"/><path class="qc-qo0m-p"/><path class="zj7k2wm3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:house-wifi"} {...others} />);
}

export default Component;
