import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-y73ccoo.css';
import '../../css/c/c7t_y-kbb.css';
import '../../css/v/vpht6hp1b.css';
import '../../css/r/r2tercboh.css';
import '../../css/f/fpa41_2-t.css';
import '../../css/o/o15a5f8kd.css';
import '../../css/a/ad4rcybxs.css';
import '../../css/h/h_vvm_boy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-y73ccoo wm-shadow"/><path class="c7t_y-kbb wm-k"/><path class="vpht6hp1b wm-k"/><path class="r2tercboh wm-k"/><path class="fpa41_2-t wm-k"/><path class="o15a5f8kd wm-shine"/><path class="ad4rcybxs wm-k"/><path class="h_vvm_boy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:candy-cane"} {...others} />);
}

export default Component;
