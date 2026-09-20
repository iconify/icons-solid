import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5_yaifwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5_yaifwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:text-scan-2"} {...others} />);
}

export default Component;
