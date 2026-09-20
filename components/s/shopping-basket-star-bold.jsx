import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg7hhucff.css';
import '../../css/i/i57-i0ixs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mg7hhucff"/><path class="i57-i0ixs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-basket-star-bold"} {...others} />);
}

export default Component;
