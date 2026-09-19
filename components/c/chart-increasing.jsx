import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smiwupvsw.css';
import '../../css/v/vzvjqggfh.css';
import '../../css/t/thbtttbfi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="smiwupvsw"/><path class="vzvjqggfh"/><path class="thbtttbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:chart-increasing"} {...others} />);
}

export default Component;
