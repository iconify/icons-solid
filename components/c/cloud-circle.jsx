import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r50l1jf5x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r50l1jf5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cloud-circle"} {...others} />);
}

export default Component;
