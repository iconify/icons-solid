import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p91k6tbgq.css';
import '../../css/t/tuxrhtbjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p91k6tbgq"/><path clip-rule="evenodd" class="tuxrhtbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-close-outline"} {...others} />);
}

export default Component;
