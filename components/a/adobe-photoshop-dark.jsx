import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_jd-0b7w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g_jd-0b7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-photoshop-dark"} {...others} />);
}

export default Component;
