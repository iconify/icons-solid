import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xujzs6iss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xujzs6iss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:my-ether-wallet"} {...others} />);
}

export default Component;
