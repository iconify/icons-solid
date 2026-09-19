import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl8z71bau.css';
import '../../css/y/yfddwd_7g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cl8z71bau"/><path class="yfddwd_7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-service-management"} {...others} />);
}

export default Component;
