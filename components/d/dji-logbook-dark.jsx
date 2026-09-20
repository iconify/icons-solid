import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygxly9bgn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ygxly9bgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dji-logbook-dark"} {...others} />);
}

export default Component;
