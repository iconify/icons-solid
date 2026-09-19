import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz9ys0aib.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fz9ys0aib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:eye-shield"} {...others} />);
}

export default Component;
