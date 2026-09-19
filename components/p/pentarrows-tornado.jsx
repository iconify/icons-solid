import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hilva9bwp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hilva9bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pentarrows-tornado"} {...others} />);
}

export default Component;
