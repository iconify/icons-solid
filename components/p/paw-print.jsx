import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lphd9xrsu.css';
import '../../css/z/z1tuntb-b.css';
import '../../css/i/i58y1ybma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lphd9xrsu wm-k"/><path class="wm-a z1tuntb-b"/><path class="i58y1ybma wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:paw-print"} {...others} />);
}

export default Component;
