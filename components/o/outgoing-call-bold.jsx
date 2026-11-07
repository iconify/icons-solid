import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-2vogrtb.css';
import '../../css/v/vglfn4bnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-2vogrtb"/><path class="vglfn4bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:outgoing-call-bold"} {...others} />);
}

export default Component;
