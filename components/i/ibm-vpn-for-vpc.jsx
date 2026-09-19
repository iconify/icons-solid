import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyguhx2tf.css';
import '../../css/z/zme4g8b-t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cyguhx2tf"/><path class="zme4g8b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-vpn-for-vpc"} {...others} />);
}

export default Component;
