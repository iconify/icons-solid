import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sattrcbdg.css';
import '../../css/l/l4rzb5b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="sattrcbdg"/><path class="l4rzb5b2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhives-alt-light"} {...others} />);
}

export default Component;
