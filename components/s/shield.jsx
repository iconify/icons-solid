import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2ss9hb6d.css';
import '../../css/s/sf0wjubya.css';
import '../../css/s/s4gz9abla.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y2ss9hb6d"/><path class="sf0wjubya"/><path class="s4gz9abla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shield"} {...others} />);
}

export default Component;
