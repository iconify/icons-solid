import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydmk_8akd.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="ydmk_8akd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:goforward-10"} {...others} />);
}

export default Component;
