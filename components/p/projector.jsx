import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyqu4bcuc.css';
import '../../css/p/p4twwqb1d.css';
import '../../css/p/pu-813bvk.css';
import '../../css/h/hgi_w8bde.css';
import '../../css/n/nbnss9m8h.css';
import '../../css/l/l7kugy4ne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kyqu4bcuc"/><path class="p4twwqb1d"/><path class="pu-813bvk"/><path class="hgi_w8bde"/><circle class="nbnss9m8h"/><circle class="l7kugy4ne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:projector"} {...others} />);
}

export default Component;
