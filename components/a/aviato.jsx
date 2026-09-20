import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8_wgcx8k.css';
import '../../css/t/t1ypfb_hf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i8_wgcx8k"/><path class="t1ypfb_hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aviato"} {...others} />);
}

export default Component;
