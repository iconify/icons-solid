import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l18a0ac3j.css';
import '../../css/m/mz10oxp2y.css';
import '../../css/w/w1ucf4bqs.css';
import '../../css/z/zmnbfjhed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l18a0ac3j"/><path class="mz10oxp2y"/><circle class="w1ucf4bqs"/><circle class="zmnbfjhed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:text-tool"} {...others} />);
}

export default Component;
