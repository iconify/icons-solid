import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nefsff0sz.css';
import '../../css/x/xfmkfpbpg.css';
import '../../css/k/k8l4uezri.css';
import '../../css/f/fsws2ou3v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nefsff0sz"/><path class="xfmkfpbpg"/><path class="k8l4uezri"/><path class="fsws2ou3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:new-file"} {...others} />);
}

export default Component;
