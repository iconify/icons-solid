import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7n1v6lug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n7n1v6lug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:minotaur"} {...others} />);
}

export default Component;
