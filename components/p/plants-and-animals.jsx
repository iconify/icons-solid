import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj6a1we8d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lj6a1we8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:plants-and-animals"} {...others} />);
}

export default Component;
