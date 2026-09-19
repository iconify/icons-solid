import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptz7ttbgp.css';
import '../../css/d/dlkylf--k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ptz7ttbgp"/><path class="dlkylf--k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-lqe"} {...others} />);
}

export default Component;
