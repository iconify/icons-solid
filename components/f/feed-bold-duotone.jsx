import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmxpybrsb.css';
import '../../css/n/nghpb3cka.css';
import '../../css/u/uq14z1bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmxpybrsb"/><path class="nghpb3cka"/><path class="uq14z1bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:feed-bold-duotone"} {...others} />);
}

export default Component;
