import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3iba4_nf.css';
import '../../css/j/juen7ygwq.css';
import '../../css/p/p9g-ylbnk.css';
import '../../css/t/thaizbz0x.css';
import '../../css/q/q7qey0_7e.css';
import '../../css/x/xuypb2j-c.css';
import '../../css/j/j02qv7mmp.css';
import '../../css/l/l_rb75azz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a3iba4_nf"/><path class="juen7ygwq"/><path class="p9g-ylbnk"/><path class="thaizbz0x"/><path class="q7qey0_7e"/><path class="xuypb2j-c"/><path class="j02qv7mmp"/><path class="l_rb75azz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:kitchenware-spatula-1"} {...others} />);
}

export default Component;
