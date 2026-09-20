import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xm9b4_4pg.css';
import '../../css/v/vl5g0ab8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xm9b4_4pg"/><path class="vl5g0ab8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:happy-face"} {...others} />);
}

export default Component;
