import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9u-03p8n.css';
import '../../css/a/ar1d8pb2n.css';
import '../../css/m/muc82xbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q9u-03p8n"/><path class="ar1d8pb2n"/><path class="muc82xbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-close-bold-duotone"} {...others} />);
}

export default Component;
