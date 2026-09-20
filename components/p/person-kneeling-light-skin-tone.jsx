import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq1bfqbrr.css';
import '../../css/h/h5qaki3px.css';
import '../../css/k/kxg230xtk.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/l/l3vc9zbcm.css';
import '../../css/c/c3e_cglle.css';
import '../../css/u/u4ox8lb0n.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="hq1bfqbrr"><circle class="h5qaki3px"/><path class="kxg230xtk"/></g><g class="brzn_0bpr"><circle class="l3vc9zbcm"/><path class="c3e_cglle"/><path class="u4ox8lb0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-kneeling-light-skin-tone"} {...others} />);
}

export default Component;
