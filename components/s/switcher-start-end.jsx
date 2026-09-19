import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hebk_l4wm.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="hebk_l4wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:switcher-start-end"} {...others} />);
}

export default Component;
