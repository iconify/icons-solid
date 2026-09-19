import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mip59zb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mip59zb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pencil-draw-filled"} {...others} />);
}

export default Component;
