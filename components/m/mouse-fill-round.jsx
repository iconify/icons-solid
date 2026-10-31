import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_2r053ct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_2r053ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mouse-fill-round"} {...others} />);
}

export default Component;
