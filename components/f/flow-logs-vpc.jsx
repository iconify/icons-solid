import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv63tfbxq.css';
import '../../css/f/fi_q4_r5k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bv63tfbxq"/><path class="fi_q4_r5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flow-logs-vpc"} {...others} />);
}

export default Component;
