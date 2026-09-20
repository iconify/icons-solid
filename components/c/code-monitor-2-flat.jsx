import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gh983_bcz.css';
import '../../css/k/k3716562u.css';
import '../../css/y/y2zhlbblz.css';
import '../../css/u/ue4pxr0jz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gh983_bcz"/><path clip-rule="evenodd" class="k3716562u"/><path class="y2zhlbblz"/><path class="ue4pxr0jz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:code-monitor-2-flat"} {...others} />);
}

export default Component;
