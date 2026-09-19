import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu5i0ibdv.css';

const viewBox = {"width":344,"height":456};
const content = `<path class="pu5i0ibdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:lock-open"} {...others} />);
}

export default Component;
