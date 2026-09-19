import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q1-o9obxf.css';
import '../../css/o/o-ykjtgrt.css';
import '../../css/q/qhf8v1bth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q1-o9obxf"/><path class="o-ykjtgrt"/><path class="qhf8v1bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pen-tablet-connect-wifi"} {...others} />);
}

export default Component;
