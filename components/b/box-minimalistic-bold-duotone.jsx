import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxy3rfbfq.css';
import '../../css/k/kngzmjb8s.css';
import '../../css/e/eyyfu1tja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxy3rfbfq"/><path class="kngzmjb8s"/><path class="eyyfu1tja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:box-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
