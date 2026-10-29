import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6ipnjbkw.css';
import '../../css/g/g390tccqy.css';
import '../../css/n/nodoh0rda.css';
import '../../css/x/xe0be1bla.css';
import '../../css/o/ob7nzdbrh.css';
import '../../css/n/naavonile.css';
import '../../css/v/vmo2_hb8l.css';
import '../../css/e/e1rw-9ysf.css';
import '../../css/s/s1_4btbcd.css';
import '../../css/v/v7yjaqbyz.css';
import '../../css/b/b0ph7eb9x.css';
import '../../css/i/ikjlrx5hm.css';
import '../../css/e/emn35ilii.css';
import '../../css/x/xz233ccoq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r6ipnjbkw wm-shadow"/><path class="g390tccqy wm-k"/><path class="nodoh0rda wm-k"/><path class="wm-k xe0be1bla"/><path class="ob7nzdbrh wm-k"/><path class="naavonile wm-shine"/><path class="vmo2_hb8l wm-k"/><path class="e1rw-9ysf wm-k"/><path class="s1_4btbcd wm-k"/><path class="v7yjaqbyz wm-k"/><path class="b0ph7eb9x wm-k"/><path class="ikjlrx5hm wm-shine"/><path class="emn35ilii wm-k"/><path class="wm-a xz233ccoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:lightbulb"} {...others} />);
}

export default Component;
