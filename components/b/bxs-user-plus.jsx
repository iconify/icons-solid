import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-z17_bzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-z17_bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-user-plus"} {...others} />);
}

export default Component;
