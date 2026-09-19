import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3lks-qva.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g3lks-qva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bolt-shield"} {...others} />);
}

export default Component;
