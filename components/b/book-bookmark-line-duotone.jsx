import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6-bipb9j.css';
import '../../css/a/alu6i0_jj.css';
import '../../css/q/q5lasnb7b.css';
import '../../css/p/pehdjub8p.css';
import '../../css/l/lyw4o5ucl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c6-bipb9j"/><path class="alu6i0_jj"/><path class="q5lasnb7b"/><path class="pehdjub8p"/><path class="lyw4o5ucl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-line-duotone"} {...others} />);
}

export default Component;
