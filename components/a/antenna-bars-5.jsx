import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aamwa-sar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aamwa-sar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:antenna-bars-5"} {...others} />);
}

export default Component;
