import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xat531b6m.css';
import '../../css/r/rmi3b7b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xat531b6m"/><path class="rmi3b7b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:laptop-camera"} {...others} />);
}

export default Component;
