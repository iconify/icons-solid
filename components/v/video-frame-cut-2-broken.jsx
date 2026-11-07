import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/odzhzlbwo.css';
import '../../css/c/c8qz4oc-t.css';
import '../../css/d/d01mapbla.css';
import '../../css/d/dx-6z3bxf.css';
import '../../css/y/ytjflnbhq.css';
import '../../css/k/k47cv9b_g.css';
import '../../css/a/aq7amqbtq.css';
import '../../css/m/mx9f_4bzg.css';
import '../../css/h/ht1jk4zsa.css';
import '../../css/r/r762e5d0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="odzhzlbwo"/><path class="c8qz4oc-t"/><path class="d01mapbla"/><path class="dx-6z3bxf"/><path class="ytjflnbhq"/><path class="k47cv9b_g"/><path class="aq7amqbtq"/><path class="mx9f_4bzg"/><path class="ht1jk4zsa"/><path class="r762e5d0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-2-broken"} {...others} />);
}

export default Component;
