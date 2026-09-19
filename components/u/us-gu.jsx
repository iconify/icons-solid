import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/d0_rmwbgb.css';
import '../../css/w/wh71m4bqn.css';
import '../../css/d/dq-4tabui.css';
import '../../css/t/tz3g9lvdp.css';
import '../../css/u/uct80jb0p.css';
import '../../css/d/du_8ut9hm.css';
import '../../css/j/jsycjbc0e.css';
import '../../css/y/yjg0wowyx.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="d0_rmwbgb"/><path class="wh71m4bqn"/><path class="dq-4tabui"/><path class="tz3g9lvdp"/><path class="uct80jb0p"/><path class="du_8ut9hm"/><path class="jsycjbc0e"/><path class="yjg0wowyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-gu"} {...others} />);
}

export default Component;
