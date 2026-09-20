import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oq367kv2n.css';
import '../../css/q/q9e-uvxvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oq367kv2n"/><path clip-rule="evenodd" class="q9e-uvxvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mailbox-fill"} {...others} />);
}

export default Component;
