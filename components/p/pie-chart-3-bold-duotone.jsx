import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5pd03bym.css';
import '../../css/i/imsrai5rb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5pd03bym"/><path clip-rule="evenodd" class="imsrai5rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pie-chart-3-bold-duotone"} {...others} />);
}

export default Component;
