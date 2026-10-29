import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6dmbibyf.css';
import '../../css/r/r6hiy7bns.css';
import '../../css/y/yi94j5zbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6dmbibyf wm-k"/><path class="r6hiy7bns wm-k"/><path class="wm-a yi94j5zbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:accessibility"} {...others} />);
}

export default Component;
