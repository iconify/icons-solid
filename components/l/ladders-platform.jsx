import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz-bcgoml.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tz-bcgoml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ladders-platform"} {...others} />);
}

export default Component;
