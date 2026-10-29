import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eatilvb7q.css';
import '../../css/r/r9qadpb9u.css';
import '../../css/j/j0mo5lk9n.css';
import '../../css/g/gnfck63ec.css';
import '../../css/c/cu22yhb9q.css';
import '../../css/y/y169d444t.css';
import '../../css/b/b4o764jiv.css';
import '../../css/k/kc9bp71dk.css';
import '../../css/v/vy_89ca9s.css';
import '../../css/m/mtk1lbcxq.css';
import '../../css/p/psk0u3bkc.css';
import '../../css/c/cic7av35b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eatilvb7q wm-shadow"/><path class="r9qadpb9u wm-k"/><path class="j0mo5lk9n wm-k"/><path class="gnfck63ec wm-k"/><path class="cu22yhb9q wm-k"/><path class="wm-shine y169d444t"/><path class="b4o764jiv wm-k"/><path class="kc9bp71dk wm-a"/><path class="vy_89ca9s wm-a"/><path class="mtk1lbcxq wm-a"/><path class="psk0u3bkc wm-a"/><path class="cic7av35b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:check-circle"} {...others} />);
}

export default Component;
