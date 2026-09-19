import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgu-vcc3y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sgu-vcc3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:walking-scout"} {...others} />);
}

export default Component;
