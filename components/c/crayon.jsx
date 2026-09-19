import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flc0i3bca.css';
import '../../css/l/l8ko_sw9f.css';
import '../../css/f/fc6kyk_co.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="flc0i3bca"/><path class="l8ko_sw9f"/><path class="fc6kyk_co"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:crayon"} {...others} />);
}

export default Component;
