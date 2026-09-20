import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-ww0jq4e.css';
import '../../css/m/m597zo_jx.css';
import '../../css/m/m6b3_0bfb.css';
import '../../css/u/ustxonbrc.css';
import '../../css/g/gikedacmw.css';
import '../../css/p/pr0u-g9db.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="t-ww0jq4e"/><path class="m597zo_jx"/><path class="m6b3_0bfb"/><path class="ustxonbrc"/><path class="gikedacmw"/><path class="pr0u-g9db"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:ghost-duo"} {...others} />);
}

export default Component;
