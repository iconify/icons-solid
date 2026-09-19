import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh5j54mvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xh5j54mvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:size-uniform-filled"} {...others} />);
}

export default Component;
