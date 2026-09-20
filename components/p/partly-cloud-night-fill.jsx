import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngvwihb-o.css';
import '../../css/n/n54i3ab4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ngvwihb-o"/><path class="n54i3ab4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:partly-cloud-night-fill"} {...others} />);
}

export default Component;
