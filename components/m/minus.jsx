import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9zsb05rr.css';
import '../../css/u/uhw0itnqs.css';
import '../../css/l/lqw3dibwd.css';
import '../../css/c/cgwrs0t0q.css';
import '../../css/b/bq1r_sn0k.css';
import '../../css/a/aw3myyk_i.css';
import '../../css/n/nbv1w52xg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t9zsb05rr wm-shadow"/><path class="uhw0itnqs"/><path class="lqw3dibwd"/><path class="cgwrs0t0q"/><path class="bq1r_sn0k"/><path class="aw3myyk_i wm-shine"/><path class="nbv1w52xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:minus"} {...others} />);
}

export default Component;
