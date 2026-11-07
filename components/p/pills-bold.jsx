import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-7ackjni.css';
import '../../css/h/h4a5d8u6i.css';
import '../../css/y/y-8n_fb5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-7ackjni"/><path class="h4a5d8u6i"/><path clip-rule="evenodd" class="y-8n_fb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-bold"} {...others} />);
}

export default Component;
