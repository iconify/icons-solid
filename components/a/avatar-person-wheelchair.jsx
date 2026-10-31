import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sr_45ac8p.css';
import '../../css/o/o5j8t9b_c.css';
import '../../css/w/w5jmk4bsb.css';
import '../../css/q/qiev4nbiz.css';
import '../../css/q/qzdy-ubce.css';
import '../../css/r/r8kz99blj.css';
import '../../css/j/jf5ectrei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sr_45ac8p"/><path class="o5j8t9b_c"/><path class="w5jmk4bsb"/><path class="qiev4nbiz"/><path class="qzdy-ubce"/><path class="r8kz99blj wm-k"/><path class="jf5ectrei wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-person-wheelchair"} {...others} />);
}

export default Component;
