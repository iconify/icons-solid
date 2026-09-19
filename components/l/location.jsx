import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upv8a5aru.css';
import '../../css/y/y67djbpgr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="upv8a5aru"/><path class="y67djbpgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location"} {...others} />);
}

export default Component;
