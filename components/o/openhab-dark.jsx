import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl6t_4w4h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hl6t_4w4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openhab-dark"} {...others} />);
}

export default Component;
