import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsh3j-hwo.css';
import '../../css/o/oxl9k8wxn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xsh3j-hwo"/><path class="oxl9k8wxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lumio"} {...others} />);
}

export default Component;
