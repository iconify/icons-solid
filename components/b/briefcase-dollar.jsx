import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k802e6byw.css';
import '../../css/e/e9qj2ib-q.css';
import '../../css/m/mdk-xubyz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k802e6byw"/><path class="e9qj2ib-q"/><path class="mdk-xubyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:briefcase-dollar"} {...others} />);
}

export default Component;
