import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfc_4d04d.css';
import '../../css/q/q1-5e3bpd.css';
import '../../css/b/bjzdabcvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfc_4d04d"/><path class="q1-5e3bpd"/><path clip-rule="evenodd" class="bjzdabcvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:base-station-2-fill"} {...others} />);
}

export default Component;
