import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2qhwmb-b.css';
import '../../css/n/n0-n86b2f.css';
import '../../css/p/pzrk982qd.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="k2qhwmb-b"/><path class="n0-n86b2f"/><path class="pzrk982qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:help"} {...others} />);
}

export default Component;
