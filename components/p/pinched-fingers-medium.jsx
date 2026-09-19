import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eglx9u74k.css';
import '../../css/e/eh7c0pbot.css';
import '../../css/l/lwnjxbt8a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="eglx9u74k"/><path class="eh7c0pbot"/><path class="lwnjxbt8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pinched-fingers-medium"} {...others} />);
}

export default Component;
