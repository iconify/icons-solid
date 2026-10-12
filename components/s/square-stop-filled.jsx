import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qahyg6byo.css';
import '../../css/z/zu_sz4rou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qahyg6byo"/><path clip-rule="evenodd" class="zu_sz4rou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-stop-filled"} {...others} />);
}

export default Component;
