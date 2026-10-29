import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-80zeltg.css';
import '../../css/w/w1a7x3uii.css';
import '../../css/w/w-y6bqe0z.css';
import '../../css/k/k5t9_hi4j.css';
import '../../css/h/hvsizj-rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-80zeltg wm-shadow"/><path class="w1a7x3uii wm-k"/><path class="w-y6bqe0z wm-k"/><path class="k5t9_hi4j wm-s"/><path class="hvsizj-rr wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:repeat-1"} {...others} />);
}

export default Component;
