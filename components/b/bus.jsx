import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy0stidic.css';
import '../../css/x/xe_m9p0ys.css';
import '../../css/a/auvpypb2m.css';
import '../../css/q/qsaor_b6z.css';
import '../../css/u/uq5medbda.css';
import '../../css/l/lk8iwcmkj.css';
import '../../css/e/e0e-_vx9q.css';
import '../../css/n/n0v48gbxu.css';
import '../../css/t/tw7u0kbya.css';
import '../../css/g/g07bqac0o.css';
import '../../css/w/wz579aceo.css';
import '../../css/j/jx9-t5zmh.css';
import '../../css/f/f4jo1lb8l.css';
import '../../css/y/ywonu6q2c.css';
import '../../css/h/hn71_bb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gy0stidic wm-k"/><path class="wm-k xe_m9p0ys"/><path class="auvpypb2m wm-k"/><path class="qsaor_b6z wm-k"/><path class="uq5medbda wm-k"/><path class="lk8iwcmkj wm-k"/><path class="e0e-_vx9q wm-k"/><path class="n0v48gbxu wm-shine"/><path class="tw7u0kbya wm-k"/><path class="g07bqac0o wm-k"/><path class="wm-k wz579aceo"/><path class="jx9-t5zmh wm-shine"/><path class="f4jo1lb8l wm-a"/><path class="wm-a ywonu6q2c"/><path class="hn71_bb6x wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bus"} {...others} />);
}

export default Component;
