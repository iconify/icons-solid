import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvny9pook.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rvny9pook"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:cloud-reload"} {...others} />);
}

export default Component;
