import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk6ovimpe.css';
import '../../css/g/g9tggne-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qk6ovimpe"/><path class="g9tggne-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quote-bold-duotone"} {...others} />);
}

export default Component;
