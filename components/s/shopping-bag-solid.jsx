import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp_u8u75x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wp_u8u75x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:shopping-bag-solid"} {...others} />);
}

export default Component;
