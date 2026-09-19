import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0ipyvbvm.css';

const viewBox = {"width":336,"height":456};
const content = `<path class="b0ipyvbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:remote-control-alt"} {...others} />);
}

export default Component;
