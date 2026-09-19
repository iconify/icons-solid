import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb68hrb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mb68hrb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-credit-card-alt"} {...others} />);
}

export default Component;
