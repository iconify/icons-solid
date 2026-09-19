import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxx5cbc5a.css';
import '../../css/t/tof8bjbhp.css';
import '../../css/v/vm8glirhj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="hxx5cbc5a"/><path class="tof8bjbhp"/><path class="vm8glirhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-fairy"} {...others} />);
}

export default Component;
