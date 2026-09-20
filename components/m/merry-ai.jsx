import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye__qpbqz.css';
import '../../css/x/xuemwg1jm.css';

const viewBox = {"width":300,"height":300};
const content = `<g class="ft5dv1b6b"><rect class="ye__qpbqz"/><path class="xuemwg1jm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:merry-ai"} {...others} />);
}

export default Component;
