import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqhzgwb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqhzgwb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:luggage-cart-fill"} {...others} />);
}

export default Component;
