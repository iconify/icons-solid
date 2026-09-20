import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/p/pb5j267yg.css';
import '../../css/l/lx8xq0b6l.css';
import '../../css/p/pktawwb9l.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGq1irjb8q"><g class="ukm9jj2re"><path class="pb5j267yg"/><path class="lx8xq0b6l"/><path class="pktawwb9l"/></g></mask></defs><path mask="url(#SVGq1irjb8q)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-plus-duotone-line"} {...others} />);
}

export default Component;
