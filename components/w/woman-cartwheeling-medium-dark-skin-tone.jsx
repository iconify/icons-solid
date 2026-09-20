import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eztqw9biy.css';
import '../../css/c/c5kg9pbyd.css';
import '../../css/l/lmk0_abjw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/k/k--9pjhxt.css';
import '../../css/f/fvcjk13yc.css';
import '../../css/z/z0ze7-z9n.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="eztqw9biy"><circle class="c5kg9pbyd"/><path class="lmk0_abjw"/></g><g class="brzn_0bpr"><circle class="k--9pjhxt"/><path class="fvcjk13yc"/><path class="z0ze7-z9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-cartwheeling-medium-dark-skin-tone"} {...others} />);
}

export default Component;
