import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/v/vbbzsbc0t.css';
import '../../css/z/zyzap34-z.css';
import '../../css/r/rjhta0mui.css';
import '../../css/j/j8cgqw99q.css';
import '../../css/n/n787bfb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><circle class="vbbzsbc0t"/><path class="zyzap34-z"/><path class="rjhta0mui"/><path class="j8cgqw99q"/><path class="n787bfb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-minimalistic-linear"} {...others} />);
}

export default Component;
