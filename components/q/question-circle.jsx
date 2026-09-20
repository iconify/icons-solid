import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu23-3bwn.css';
import '../../css/o/obkdnvb0e.css';
import '../../css/q/qh4l7r3-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wu23-3bwn"/><circle class="obkdnvb0e"/><circle class="qh4l7r3-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:question-circle"} {...others} />);
}

export default Component;
