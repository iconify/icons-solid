import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww0sxhtpg.css';
import '../../css/s/skhazup6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ww0sxhtpg"/><path class="skhazup6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cheese-filled"} {...others} />);
}

export default Component;
