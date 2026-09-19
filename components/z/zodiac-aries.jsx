import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-_oh8f1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-_oh8f1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:zodiac-aries"} {...others} />);
}

export default Component;
