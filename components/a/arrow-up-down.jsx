import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjctelbxh.css';
import '../../css/j/jh0pdbcdl.css';
import '../../css/z/zouyt6gal.css';
import '../../css/t/t81nymb5c.css';
import '../../css/v/v5_yx0brs.css';
import '../../css/f/flyj1lomr.css';
import '../../css/s/sqhhe-1nv.css';
import '../../css/k/kpcsy8q4m.css';
import '../../css/b/bf3furfak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kjctelbxh wm-shadow"/><path class="jh0pdbcdl wm-shadow"/><path class="zouyt6gal"/><path class="t81nymb5c"/><path class="v5_yx0brs"/><path class="flyj1lomr"/><path class="sqhhe-1nv wm-shine"/><path class="kpcsy8q4m wm-shine"/><path class="bf3furfak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:arrow-up-down"} {...others} />);
}

export default Component;
