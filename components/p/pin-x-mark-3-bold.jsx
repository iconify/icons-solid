import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4x9v31po.css';
import '../../css/g/g8g82bb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4x9v31po"/><path class="g8g82bb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pin-x-mark-3-bold"} {...others} />);
}

export default Component;
