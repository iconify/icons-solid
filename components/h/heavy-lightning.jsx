import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oigkvhr6x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oigkvhr6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:heavy-lightning"} {...others} />);
}

export default Component;
