import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcmodn71m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcmodn71m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sledgehammer-broken"} {...others} />);
}

export default Component;
