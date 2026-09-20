import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfiv3z6qi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zfiv3z6qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mullvad-vpn-light"} {...others} />);
}

export default Component;
