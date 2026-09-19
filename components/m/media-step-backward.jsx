import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl1m2nbwh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kl1m2nbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:media-step-backward"} {...others} />);
}

export default Component;
