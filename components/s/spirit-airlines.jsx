import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl3jjbtxm.css';
import '../../css/e/ej_-dh--d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kl3jjbtxm"/><path class="ej_-dh--d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spirit-airlines"} {...others} />);
}

export default Component;
