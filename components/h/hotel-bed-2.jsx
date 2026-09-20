import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hpweukbtm.css';
import '../../css/a/awi2fxzbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hpweukbtm"/><path class="awi2fxzbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hotel-bed-2"} {...others} />);
}

export default Component;
