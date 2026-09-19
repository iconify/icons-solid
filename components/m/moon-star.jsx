import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-4g-9byg.css';
import '../../css/a/a2og3c3yl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-4g-9byg"/><path class="a2og3c3yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:moon-star"} {...others} />);
}

export default Component;
