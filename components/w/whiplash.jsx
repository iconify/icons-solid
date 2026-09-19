import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li9yl2xtw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="li9yl2xtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:whiplash"} {...others} />);
}

export default Component;
