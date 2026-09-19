import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8xj_quvl.css';
import '../../css/h/hqconcbne.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h8xj_quvl"/><path class="hqconcbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:kubelet"} {...others} />);
}

export default Component;
