import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7-t8bbmf.css';
import '../../css/j/jn0tw67kj.css';
import '../../css/v/v2mw8xbhk.css';
import '../../css/g/gayh0hbqt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="p7-t8bbmf"/><path class="jn0tw67kj"/><path class="v2mw8xbhk"/><path class="gayh0hbqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:kiwi-fruit"} {...others} />);
}

export default Component;
