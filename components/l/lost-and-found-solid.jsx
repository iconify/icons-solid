import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7ej88_4z.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="k7ej88_4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:lost-and-found-solid"} {...others} />);
}

export default Component;
