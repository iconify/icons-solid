import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecuqskb1m.css';
import '../../css/x/x7ap6acgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ecuqskb1m"/><path class="x7ap6acgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hop-off-filled"} {...others} />);
}

export default Component;
