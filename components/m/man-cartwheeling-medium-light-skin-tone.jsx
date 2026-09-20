import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpyqy236k.css';
import '../../css/k/k-6wvukge.css';
import '../../css/c/c30ngsbte.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/d/d0fw57ehj.css';
import '../../css/u/uey6unb3w.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wpyqy236k"><circle class="k-6wvukge"/><path class="c30ngsbte"/></g><g class="brzn_0bpr"><circle class="d0fw57ehj"/><path class="uey6unb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-cartwheeling-medium-light-skin-tone"} {...others} />);
}

export default Component;
