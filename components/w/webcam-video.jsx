import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmsp9pbwd.css';
import '../../css/k/kwc9hhgqd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xmsp9pbwd"/><path class="kwc9hhgqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:webcam-video"} {...others} />);
}

export default Component;
