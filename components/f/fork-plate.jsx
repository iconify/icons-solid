import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hp5kg3bxz.css';
import '../../css/f/fappuev8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hp5kg3bxz"/><path class="fappuev8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:fork-plate"} {...others} />);
}

export default Component;
