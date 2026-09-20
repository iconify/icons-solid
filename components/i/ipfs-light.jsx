import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlba2bbpu.css';
import '../../css/f/fc1chxb1r.css';
import '../../css/z/zlnuk-krx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nlba2bbpu"/><path class="fc1chxb1r"/><path class="zlnuk-krx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ipfs-light"} {...others} />);
}

export default Component;
