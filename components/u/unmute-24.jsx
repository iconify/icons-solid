import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7bn6nb8f.css';
import '../../css/i/izn9dcbqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7bn6nb8f"/><path class="izn9dcbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:unmute-24"} {...others} />);
}

export default Component;
