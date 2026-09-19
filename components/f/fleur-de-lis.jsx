import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tecpr0e2s.css';
import '../../css/c/cd4da036i.css';
import '../../css/t/tffqy754l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="tecpr0e2s"/><path class="cd4da036i"/><path class="tffqy754l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fleur-de-lis"} {...others} />);
}

export default Component;
