import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9bvln9aq.css';
import '../../css/a/aa_l8gx4t.css';
import '../../css/e/ee61j1b7q.css';
import '../../css/t/t9yd83ytj.css';
import '../../css/o/ogstnobio.css';
import '../../css/k/kvh6v9alh.css';
import '../../css/u/umm0sef1r.css';
import '../../css/b/b_wy0rydw.css';
import '../../css/r/r29szohaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9bvln9aq wm-shadow"/><path class="aa_l8gx4t wm-k"/><path class="ee61j1b7q wm-k"/><path class="t9yd83ytj wm-k"/><path class="ogstnobio wm-k"/><path class="kvh6v9alh wm-k"/><path class="umm0sef1r wm-shine"/><path class="b_wy0rydw wm-a"/><path class="r29szohaz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:mouse"} {...others} />);
}

export default Component;
