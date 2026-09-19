import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blqt9htem.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="blqt9htem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:dice-eight-faces-eight"} {...others} />);
}

export default Component;
