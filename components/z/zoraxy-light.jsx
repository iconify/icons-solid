import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei45d4g-v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ei45d4g-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zoraxy-light"} {...others} />);
}

export default Component;
