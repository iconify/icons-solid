import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/st72__-bh.css';
import '../../css/b/bqqq5-9ri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="st72__-bh"/><path class="bqqq5-9ri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-alt-light"} {...others} />);
}

export default Component;
