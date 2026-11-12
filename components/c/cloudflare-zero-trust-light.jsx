import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0u-v_b0l.css';
import '../../css/o/oouf8iqje.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j0u-v_b0l"/><path class="oouf8iqje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudflare-zero-trust-light"} {...others} />);
}

export default Component;
