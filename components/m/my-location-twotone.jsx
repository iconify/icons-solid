import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/t/tncpqz.css';
import '../../css/y/ydovum.css';
import '../../css/a/ahky_j.css';
import '../../css/c/cytc7d.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-4px.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-pjbx7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew tncpqz ydovum"/><circle class="ahky_j ydovum"/><path class="cytc7d iw1iew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:my-location-twotone"} {...others} />);
}

export default Component;
