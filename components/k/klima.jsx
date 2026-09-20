import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odmh5oz-e.css';
import '../../css/x/x0w8p7-8h.css';
import '../../css/k/kpkdmqbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="odmh5oz-e"/><path class="x0w8p7-8h"/><path class="kpkdmqbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:klima"} {...others} />);
}

export default Component;
