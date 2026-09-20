import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj_w2xb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj_w2xb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-dashed-bottom"} {...others} />);
}

export default Component;
