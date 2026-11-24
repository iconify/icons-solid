import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvf-d1baf.css';
import '../../css/c/cs8o81b5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvf-d1baf"/><path class="cs8o81b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lightbulb-off-filled"} {...others} />);
}

export default Component;
