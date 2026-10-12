import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-wke7znd.css';
import '../../css/p/p1xhgbied.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-wke7znd"/><path clip-rule="evenodd" class="p1xhgbied"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:banknote-check-filled"} {...others} />);
}

export default Component;
