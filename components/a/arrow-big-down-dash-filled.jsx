import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aha5mabrl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aha5mabrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:arrow-big-down-dash-filled"} {...others} />);
}

export default Component;
