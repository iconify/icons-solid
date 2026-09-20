import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h8uvm6brp.css';
import '../../css/j/jo91o0nag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h8uvm6brp"/><path class="jo91o0nag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:folder-block"} {...others} />);
}

export default Component;
