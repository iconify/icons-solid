import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4fq1ibme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4fq1ibme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:motion-pause"} {...others} />);
}

export default Component;
