import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d1go2ob_j.css';
import '../../css/t/t7v5ahmne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d1go2ob_j"/><path class="t7v5ahmne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:forward"} {...others} />);
}

export default Component;
