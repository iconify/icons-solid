import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff5t4wldt.css';
import '../../css/w/ww30y30st.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ff5t4wldt"/><path class="ww30y30st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pdfcraft"} {...others} />);
}

export default Component;
