import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw_x7sqyd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lw_x7sqyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:horn-internal"} {...others} />);
}

export default Component;
