import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-lm-kbpu.css';
import '../../css/k/k4cp8nxvu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h-lm-kbpu"/><path class="k4cp8nxvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:machine-learning"} {...others} />);
}

export default Component;
