import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv_3wkq1r.css';
import '../../css/w/wisf880rp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kv_3wkq1r"/><path class="wisf880rp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zerotier"} {...others} />);
}

export default Component;
