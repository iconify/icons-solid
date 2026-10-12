import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7tvpwjwp.css';
import '../../css/x/x-bzt0blf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7tvpwjwp"/><path clip-rule="evenodd" class="x-bzt0blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-star-filled"} {...others} />);
}

export default Component;
