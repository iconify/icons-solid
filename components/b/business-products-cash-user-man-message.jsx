import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbgy7acda.css';
import '../../css/c/cuxmvrb_u.css';
import '../../css/h/h33fngsjx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fbgy7acda"/><path class="cuxmvrb_u"/><path class="h33fngsjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-cash-user-man-message"} {...others} />);
}

export default Component;
