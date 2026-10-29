import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zsvdbqb6z.css';
import '../../css/r/rlerw4b2m.css';
import '../../css/d/d82t-_bkt.css';
import '../../css/m/mhqcj7bbz.css';
import '../../css/a/aai9a3xmq.css';
import '../../css/d/dq9cgbblt.css';
import '../../css/x/x2mnypi0i.css';
import '../../css/c/c8yg1njbs.css';
import '../../css/f/f78uxubfo.css';
import '../../css/f/ftsa6phzv.css';
import '../../css/i/in5_i4ury.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow zsvdbqb6z"/><path class="rlerw4b2m wm-a"/><path class="d82t-_bkt wm-a"/><path class="mhqcj7bbz wm-a"/><path class="aai9a3xmq wm-a"/><path class="dq9cgbblt wm-shine"/><path class="wm-k x2mnypi0i"/><path class="c8yg1njbs wm-k"/><path class="f78uxubfo wm-k"/><path class="ftsa6phzv wm-k"/><path class="in5_i4ury wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:waves"} {...others} />);
}

export default Component;
