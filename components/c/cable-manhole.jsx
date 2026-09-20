import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl5jfab4x.css';
import '../../css/t/tbnuk2u5e.css';
import '../../css/y/ycv4igjlj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dl5jfab4x"/><path class="tbnuk2u5e"/><path class="ycv4igjlj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cable-manhole"} {...others} />);
}

export default Component;
