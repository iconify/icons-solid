import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg70pgb0p.css';
import '../../css/e/ebhqswb8l.css';
import '../../css/c/cc3vvsb-u.css';
import '../../css/e/e5zkqccqv.css';
import '../../css/g/gtbgalm4b.css';
import '../../css/e/euw6p3jav.css';
import '../../css/c/cdk7rbc4b.css';
import '../../css/p/p4wt-ub8c.css';
import '../../css/z/zevdoxblg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hg70pgb0p"/><path class="ebhqswb8l"/><path class="cc3vvsb-u"/><path class="e5zkqccqv"/><path class="gtbgalm4b"/><path class="euw6p3jav"/><path class="cdk7rbc4b"/><path class="p4wt-ub8c"/><path class="zevdoxblg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:ear"} {...others} />);
}

export default Component;
