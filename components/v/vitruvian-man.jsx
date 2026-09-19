import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mro1i2bzn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mro1i2bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:vitruvian-man"} {...others} />);
}

export default Component;
