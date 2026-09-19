import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf2picbgv.css';
import '../../css/s/sxkslcbhx.css';
import '../../css/z/z2eb_1biu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vf2picbgv"/><path class="sxkslcbhx"/><path class="z2eb_1biu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:palms-up-together"} {...others} />);
}

export default Component;
