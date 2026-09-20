import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/i8fgxnb-f.css';
import '../../css/y/y4s1wobbc.css';
import '../../css/o/obqcm0o_s.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="i8fgxnb-f"/><path class="y4s1wobbc"/><path class="obqcm0o_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:fingerprint"} {...others} />);
}

export default Component;
