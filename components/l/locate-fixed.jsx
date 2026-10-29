import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phrza4-pw.css';
import '../../css/u/un-yk3pji.css';
import '../../css/c/c1-h73bdy.css';
import '../../css/l/lwqllibum.css';
import '../../css/d/dgg4u0bug.css';
import '../../css/g/gb2slv93b.css';
import '../../css/j/jjns0ffui.css';
import '../../css/q/q803o12te.css';
import '../../css/o/o81j8h-as.css';
import '../../css/b/baqg9nbjk.css';
import '../../css/z/zz_lv-b-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="phrza4-pw wm-shadow"/><path class="un-yk3pji wm-k"/><path class="c1-h73bdy wm-k"/><path class="lwqllibum wm-k"/><path class="dgg4u0bug wm-k"/><path class="gb2slv93b wm-k"/><path class="jjns0ffui wm-shine"/><path class="q803o12te wm-k"/><path class="o81j8h-as wm-k"/><path class="baqg9nbjk wm-k"/><path class="wm-a zz_lv-b-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:locate-fixed"} {...others} />);
}

export default Component;
