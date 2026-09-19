import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwbewhi_u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jwbewhi_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:moon-filled"} {...others} />);
}

export default Component;
