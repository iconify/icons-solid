import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb0r9l_nb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eb0r9l_nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-pin"} {...others} />);
}

export default Component;
