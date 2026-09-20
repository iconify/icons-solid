import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t12f6_cmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t12f6_cmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:cart-add"} {...others} />);
}

export default Component;
