import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbcd8xbyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dbcd8xbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:anomaly-found"} {...others} />);
}

export default Component;
