import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4bp63bqf.css';
import '../../css/u/upne6j1lj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a x4bp63bqf"/><path class="upne6j1lj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sun"} {...others} />);
}

export default Component;
