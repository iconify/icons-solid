import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj06gt1dm.css';
import '../../css/j/jikzfkb4t.css';
import '../../css/w/wo8rdd7vx.css';
import '../../css/f/f-9xdy2qe.css';
import '../../css/w/w_k809rmn.css';
import '../../css/f/fgtfrwewq.css';
import '../../css/e/e2fyy18yn.css';
import '../../css/x/x_1ldvb4u.css';
import '../../css/u/u56ot6byy.css';
import '../../css/p/pzb_1kbjz.css';
import '../../css/u/u5rom3-0k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fj06gt1dm"/><path class="jikzfkb4t"/><path class="wo8rdd7vx"/><path class="f-9xdy2qe"/><path class="w_k809rmn"/><path class="fgtfrwewq"/><path class="e2fyy18yn"/><path class="x_1ldvb4u"/><path class="u56ot6byy"/><path class="pzb_1kbjz"/><path class="u5rom3-0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:wine-glass"} {...others} />);
}

export default Component;
