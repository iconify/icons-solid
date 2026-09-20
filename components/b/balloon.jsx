import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3on7rj2f.css';
import '../../css/y/y2b4nwbyp.css';
import '../../css/l/lnzlczfpg.css';
import '../../css/n/n20_omb2u.css';
import '../../css/v/v-8genztp.css';
import '../../css/m/mwwsag7rw.css';
import '../../css/y/yxc-jobqs.css';
import '../../css/s/swvijzv3g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r3on7rj2f"/><circle class="y2b4nwbyp"/><path class="lnzlczfpg"/><g class="n20_omb2u"><path class="v-8genztp"/><circle class="mwwsag7rw"/><path class="yxc-jobqs"/><path class="swvijzv3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:balloon"} {...others} />);
}

export default Component;
