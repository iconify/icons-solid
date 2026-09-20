import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw_nsbqvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pw_nsbqvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cart-arrow-up"} {...others} />);
}

export default Component;
