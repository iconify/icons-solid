import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/futv6obbu.css';
import '../../css/t/tgoxe12qp.css';
import '../../css/k/kun41p0ay.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="futv6obbu"/><path class="tgoxe12qp"/><path class="kun41p0ay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pool-8-ball"} {...others} />);
}

export default Component;
