import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ihodrzbnu.css';
import '../../css/c/c3o4iqbwy.css';
import '../../css/a/ajuldzfdz.css';
import '../../css/g/gdhn8zq5z.css';
import '../../css/n/nzqobrz2q.css';
import '../../css/t/tmd0_8bsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ihodrzbnu wm-shadow"/><path class="c3o4iqbwy"/><path class="ajuldzfdz"/><path class="gdhn8zq5z"/><path class="nzqobrz2q"/><path class="tmd0_8bsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-panda"} {...others} />);
}

export default Component;
