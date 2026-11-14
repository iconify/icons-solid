import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1lh1ybdm.css';
import '../../css/d/dbja7no2w.css';
import '../../css/f/fntxyg3gk.css';
import '../../css/z/zpp0t1jun.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m1lh1ybdm"/><path class="dbja7no2w"/><path class="fntxyg3gk"/><path class="zpp0t1jun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:qodo-wordmark"} {...others} />);
}

export default Component;
