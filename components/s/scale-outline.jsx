import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq3r5fw2r.css';
import '../../css/i/i_d2xgsxg.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="lq3r5fw2r"/><path class="i_d2xgsxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:scale-outline"} {...others} />);
}

export default Component;
