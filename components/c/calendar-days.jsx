import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xirjtxbqy.css';
import '../../css/j/jqhmlbw-b.css';
import '../../css/z/zqucwxust.css';
import '../../css/u/uap6r4jgj.css';
import '../../css/j/jpeittfov.css';
import '../../css/z/z_52hqb7v.css';
import '../../css/l/loqts3cyf.css';
import '../../css/y/yk5d5_b6p.css';
import '../../css/b/bu-sguqul.css';
import '../../css/g/gceucccuf.css';
import '../../css/n/n_1dxsc9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xirjtxbqy"/><path class="jqhmlbw-b wm-a"/><path class="wm-k zqucwxust"/><path class="uap6r4jgj wm-k"/><path class="jpeittfov wm-k"/><path class="wm-k z_52hqb7v"/><path class="loqts3cyf wm-a"/><path class="wm-shadow yk5d5_b6p"/><path class="bu-sguqul wm-shine"/><path class="gceucccuf wm-shine"/><path class="n_1dxsc9t wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:calendar-days"} {...others} />);
}

export default Component;
