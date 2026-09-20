import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyxxv8bah.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zyxxv8bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:daemon-sync-light"} {...others} />);
}

export default Component;
