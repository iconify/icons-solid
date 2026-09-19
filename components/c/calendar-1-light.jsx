import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjuv8i3nk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjuv8i3nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:calendar-1-light"} {...others} />);
}

export default Component;
