import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/altfk8f4f.css';
import '../../css/z/zwiwtuyfv.css';
import '../../css/h/hy5ynwbpg.css';
import '../../css/f/fr3sfxblk.css';
import '../../css/a/ac3q1i7oe.css';
import '../../css/v/vmh889cnk.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/s/s56a7ib2m.css';
import '../../css/z/zds6xf5jf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="altfk8f4f"/><path class="zwiwtuyfv"/><path class="hy5ynwbpg"/><path class="fr3sfxblk"/><path class="ac3q1i7oe"/><circle class="vmh889cnk"/><g class="brzn_0bpr"><path class="s56a7ib2m"/><path class="zds6xf5jf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:motorbike-helmet"} {...others} />);
}

export default Component;
