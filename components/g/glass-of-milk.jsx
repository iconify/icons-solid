import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynyl4jbvq.css';
import '../../css/d/dfr81me3b.css';
import '../../css/x/xo8slzqda.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ynyl4jbvq"/><path class="dfr81me3b"/><path class="xo8slzqda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:glass-of-milk"} {...others} />);
}

export default Component;
