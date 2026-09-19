import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwg0v_ffw.css';
import '../../css/v/vw4s4d69i.css';
import '../../css/v/vp-phbc-d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lwg0v_ffw"/><path class="vw4s4d69i"/><path class="vp-phbc-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mending-heart"} {...others} />);
}

export default Component;
