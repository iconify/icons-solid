import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f11294w7f.css';
import '../../css/c/c6vxn_-6e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f11294w7f"/><path class="c6vxn_-6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:dashboard-reference"} {...others} />);
}

export default Component;
