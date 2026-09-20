import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h648icg5m.css';
import '../../css/j/jvbru7b5c.css';
import '../../css/n/no4nwlbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h648icg5m"/><path class="jvbru7b5c"/><path class="no4nwlbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:drawing-compass"} {...others} />);
}

export default Component;
