import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1st-obsh.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/p/pvue1ejtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="g1st-obsh"/><circle class="zv6cqnbnp"/><path class="pvue1ejtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:webcam"} {...others} />);
}

export default Component;
