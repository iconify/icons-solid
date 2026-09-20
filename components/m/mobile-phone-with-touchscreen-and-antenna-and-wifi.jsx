import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eninhbc6s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eninhbc6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mobile-phone-with-touchscreen-and-antenna-and-wifi"} {...others} />);
}

export default Component;
