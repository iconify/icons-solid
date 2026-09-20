import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/une0tkb_h.css';
import '../../css/z/zxjr-cemx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="une0tkb_h"/><path class="zxjr-cemx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:k7"} {...others} />);
}

export default Component;
