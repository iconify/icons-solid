import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz9_n9bru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kz9_n9bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:coupon-5-fill"} {...others} />);
}

export default Component;
