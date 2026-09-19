import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb8mpqbku.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="fb8mpqbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:map"} {...others} />);
}

export default Component;
