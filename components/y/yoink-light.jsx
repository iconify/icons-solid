import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzzgpv2kq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nzzgpv2kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yoink-light"} {...others} />);
}

export default Component;
