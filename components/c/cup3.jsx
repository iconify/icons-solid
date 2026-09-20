import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/erbtq19fd.css';
import '../../css/a/a6914tbjy.css';
import '../../css/q/q12faq_bh.css';
import '../../css/l/l2bu-r9gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="erbtq19fd"/><path class="a6914tbjy"/><path class="q12faq_bh"/><path class="l2bu-r9gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cup3"} {...others} />);
}

export default Component;
