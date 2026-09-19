import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mh6cbej9q.css';
import '../../css/s/shfkwhm7d.css';
import '../../css/t/thyp_qbyh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mh6cbej9q"/><path class="shfkwhm7d"/><path class="thyp_qbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:long-drum"} {...others} />);
}

export default Component;
