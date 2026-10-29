import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj7dvbcbq.css';
import '../../css/t/tnw5n4brt.css';
import '../../css/d/deaxs3sre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sj7dvbcbq wm-k"/><path class="tnw5n4brt wm-a"/><path class="deaxs3sre wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:log-out"} {...others} />);
}

export default Component;
