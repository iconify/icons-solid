import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy6j6obsd.css';
import '../../css/v/v9cgq0h_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iy6j6obsd"/><path class="v9cgq0h_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-binary-24"} {...others} />);
}

export default Component;
