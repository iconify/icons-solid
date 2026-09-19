import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cto2kz5ar.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cto2kz5ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:dig-dug"} {...others} />);
}

export default Component;
