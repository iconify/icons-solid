import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx2wz8k2v.css';
import '../../css/k/kf_g6jb4r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tx2wz8k2v"/><path class="kf_g6jb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:writefreely"} {...others} />);
}

export default Component;
