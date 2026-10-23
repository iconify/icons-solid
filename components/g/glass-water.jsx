import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a6-7_f0mc.css';
import '../../css/o/ocya4qlxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a6-7_f0mc"/><path class="ocya4qlxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:glass-water"} {...others} />);
}

export default Component;
