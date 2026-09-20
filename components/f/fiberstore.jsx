import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuntz5arz.css';
import '../../css/l/l9we6spoz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vuntz5arz"/><path class="l9we6spoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fiberstore"} {...others} />);
}

export default Component;
