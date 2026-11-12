import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8ly-hb2i.css';
import '../../css/f/f9y25p_8h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q8ly-hb2i"/><path class="f9y25p_8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:subarr"} {...others} />);
}

export default Component;
