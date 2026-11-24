import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imhm0cmas.css';
import '../../css/v/v0rsyqbxa.css';
import '../../css/c/c704jcblz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="imhm0cmas"/><path class="v0rsyqbxa"/><path class="c704jcblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:printer-x-duotone"} {...others} />);
}

export default Component;
