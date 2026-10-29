import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd3badb9n.css';
import '../../css/u/u7f-7-b7n.css';
import '../../css/n/ny40n5bjx.css';
import '../../css/g/g3avjx89v.css';
import '../../css/x/xo-0tcbpx.css';
import '../../css/b/b-xfcbrgq.css';
import '../../css/g/gffeyabyt.css';
import '../../css/d/d6epr6ale.css';
import '../../css/i/ilxodkb4v.css';
import '../../css/o/o7ng4lb4t.css';
import '../../css/m/mek5m3b7i.css';
import '../../css/u/ug0oz5edf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wd3badb9n wm-shadow"/><path class="u7f-7-b7n wm-a"/><path class="ny40n5bjx wm-a"/><path class="g3avjx89v wm-a"/><path class="wm-a xo-0tcbpx"/><path class="b-xfcbrgq wm-k"/><path class="gffeyabyt wm-k"/><path class="d6epr6ale wm-k"/><path class="ilxodkb4v wm-k"/><path class="o7ng4lb4t wm-k"/><path class="mek5m3b7i wm-k"/><path class="ug0oz5edf wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:search"} {...others} />);
}

export default Component;
