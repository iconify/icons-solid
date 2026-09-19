import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu8fkes9x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iu8fkes9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:school-of-fish"} {...others} />);
}

export default Component;
