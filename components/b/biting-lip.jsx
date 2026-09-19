import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ln0hz112o.css';
import '../../css/x/xfnm38bzl.css';
import '../../css/t/tu6_0_bai.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ln0hz112o"/><path class="xfnm38bzl"/><path class="tu6_0_bai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:biting-lip"} {...others} />);
}

export default Component;
