import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhxm0b_ck.css';
import '../../css/h/hf_7z-k3m.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="hhxm0b_ck"/><path class="hf_7z-k3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ban"} {...others} />);
}

export default Component;
