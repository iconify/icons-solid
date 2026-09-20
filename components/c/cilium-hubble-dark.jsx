import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsp2f4jtx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dsp2f4jtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cilium-hubble-dark"} {...others} />);
}

export default Component;
