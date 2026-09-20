import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7qzoub5e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e7qzoub5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:truenas-core-light"} {...others} />);
}

export default Component;
