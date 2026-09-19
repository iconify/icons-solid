import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udk5w8b3q.css';
import '../../css/i/inzppicrm.css';
import '../../css/g/g49nu_bhy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="udk5w8b3q"/><path class="inzppicrm"/><path class="g49nu_bhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:flower-playing-cards"} {...others} />);
}

export default Component;
