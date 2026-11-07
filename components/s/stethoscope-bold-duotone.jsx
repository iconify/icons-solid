import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7ywjc5dv.css';
import '../../css/c/c5w0iq14v.css';
import '../../css/w/wvvwem2de.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7ywjc5dv"/><path class="c5w0iq14v"/><path class="wvvwem2de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stethoscope-bold-duotone"} {...others} />);
}

export default Component;
