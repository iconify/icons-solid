import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im2wm0ppx.css';
import '../../css/o/oi_6x_b8r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im2wm0ppx"/><path class="oi_6x_b8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:trash-3"} {...others} />);
}

export default Component;
