import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fjxam0bln.css';
import '../../css/e/ei0y91b4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fjxam0bln"/><path class="ei0y91b4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:spa"} {...others} />);
}

export default Component;
