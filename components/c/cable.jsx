import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc3q56u4m.css';
import '../../css/g/gqeaukblh.css';
import '../../css/b/bijjapnef.css';
import '../../css/z/z7_b2xb6z.css';
import '../../css/w/w8ow5hbte.css';
import '../../css/i/iyy-t7b7m.css';
import '../../css/a/atp20rswh.css';
import '../../css/s/szsgk3bwj.css';
import '../../css/s/s1ugg13ir.css';
import '../../css/o/o1ias1y_s.css';
import '../../css/z/zven-8bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tc3q56u4m wm-shadow"/><path class="gqeaukblh wm-k"/><path class="bijjapnef wm-k"/><path class="wm-k z7_b2xb6z"/><path class="w8ow5hbte wm-k"/><path class="iyy-t7b7m wm-k"/><path class="atp20rswh wm-shine"/><path class="szsgk3bwj wm-a"/><path class="s1ugg13ir wm-a"/><path class="o1ias1y_s wm-a"/><path class="wm-a zven-8bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cable"} {...others} />);
}

export default Component;
