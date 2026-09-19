import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgex78bhw.css';
import '../../css/p/pjance51f.css';
import '../../css/h/hvy19cb7c.css';
import '../../css/r/r_0yv_v8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="notification-bell-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="sgex78bhw"/><path clip-rule="evenodd" class="pjance51f"/><path class="hvy19cb7c"/><path clip-rule="evenodd" class="r_0yv_v8w"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:notification-bell-outline"} {...others} />);
}

export default Component;
