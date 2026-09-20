import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/widbvqqbu.css';
import '../../css/b/b4t8s5bof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="widbvqqbu"/><path class="b4t8s5bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-load-light"} {...others} />);
}

export default Component;
