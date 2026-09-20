import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1p8x0k_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1p8x0k_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-letter-a-filled"} {...others} />);
}

export default Component;
