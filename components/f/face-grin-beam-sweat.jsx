import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc78wxt7j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oc78wxt7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:face-grin-beam-sweat"} {...others} />);
}

export default Component;
