import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyhipz_0y.css';
import '../../css/b/bla-2gqwi.css';
import '../../css/j/jid_zyb8e.css';
import '../../css/f/fg6xv5bub.css';
import '../../css/k/kdk2fbbio.css';
import '../../css/w/w4zwb1bvg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="iyhipz_0y"/><path class="bla-2gqwi"/><path class="jid_zyb8e"/><path class="fg6xv5bub"/><path class="kdk2fbbio"/><path class="w4zwb1bvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-prompt-spark"} {...others} />);
}

export default Component;
