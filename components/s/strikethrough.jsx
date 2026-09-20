import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wao5n55nx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wao5n55nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:strikethrough"} {...others} />);
}

export default Component;
