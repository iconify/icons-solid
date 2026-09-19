import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_0x8-b6i.css';
import '../../css/c/ch7v7jbbt.css';
import '../../css/c/cyx7yvbcf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="j_0x8-b6i"/><path class="ch7v7jbbt"/><path class="cyx7yvbcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:paintbrush"} {...others} />);
}

export default Component;
