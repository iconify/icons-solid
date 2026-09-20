import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dj2vavymv.css';
import '../../css/k/ke96b69fk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dj2vavymv"/><path class="ke96b69fk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:medical-ribbon-1"} {...others} />);
}

export default Component;
