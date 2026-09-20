import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy6j6obsd.css';
import '../../css/e/e7yp3qfxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iy6j6obsd"/><path class="e7yp3qfxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-code-24"} {...others} />);
}

export default Component;
