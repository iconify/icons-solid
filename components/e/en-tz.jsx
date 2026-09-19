import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/hc01sfxfl.css';
import '../../css/v/vzppp2b_d.css';
import '../../css/h/h-admbbhr.css';
import '../../css/x/x_9ua_bfe.css';
import '../../css/j/jxplt7qmq.css';
import '../../css/k/k6jc9pm1q.css';
import '../../css/y/yyo7gf56f.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="hc01sfxfl"/><path class="vzppp2b_d"/><path class="h-admbbhr"/><path class="x_9ua_bfe"/><path class="jxplt7qmq"/><path class="k6jc9pm1q"/><path class="yyo7gf56f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:en-tz"} {...others} />);
}

export default Component;
