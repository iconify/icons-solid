import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/osvugpb5t.css';
import '../../css/z/zque0ebft.css';
import '../../css/o/ooahe0b2m.css';
import '../../css/z/zgg4bvbon.css';
import '../../css/u/uluiphbdz.css';
import '../../css/v/v_1nxi62s.css';
import '../../css/e/e66zutb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="osvugpb5t"/><path class="wm-k zque0ebft"/><path class="ooahe0b2m wm-a"/><path class="wm-s zgg4bvbon"/><path class="uluiphbdz wm-k"/><path class="v_1nxi62s wm-a"/><path class="e66zutb2p wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-dish-sketch"} {...others} />);
}

export default Component;
