import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf1jbf2qe.css';
import '../../css/q/q833pjblr.css';
import '../../css/f/f2lulo2jg.css';
import '../../css/w/wq4p46bbg.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/k/kvysa4bmt.css';
import '../../css/a/a32l11bcb.css';
import '../../css/w/wwfn8ccbb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jf1jbf2qe"/><path class="q833pjblr"/><path class="f2lulo2jg"/><path class="wq4p46bbg"/><g class="brzn_0bpr"><path class="kvysa4bmt"/><path class="a32l11bcb"/><path class="wwfn8ccbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:jellyfish"} {...others} />);
}

export default Component;
