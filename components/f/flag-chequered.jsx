import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo6nj3bvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lo6nj3bvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flag-chequered"} {...others} />);
}

export default Component;
