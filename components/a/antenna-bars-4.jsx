import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jio9igvay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jio9igvay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:antenna-bars-4"} {...others} />);
}

export default Component;
