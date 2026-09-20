import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqr3-dvvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kqr3-dvvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raindrop-io-dark"} {...others} />);
}

export default Component;
