import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5u9rbcmz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n5u9rbcmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:magic-palm"} {...others} />);
}

export default Component;
