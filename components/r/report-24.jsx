import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2tkw6wrs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p2tkw6wrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:report-24"} {...others} />);
}

export default Component;
