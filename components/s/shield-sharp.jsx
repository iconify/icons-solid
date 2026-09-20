import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isrxau9wl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="isrxau9wl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:shield-sharp"} {...others} />);
}

export default Component;
