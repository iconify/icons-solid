import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hz2ffhbor.css';
import '../../css/e/edqdv4a4p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hz2ffhbor"/><path class="edqdv4a4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:link"} {...others} />);
}

export default Component;
