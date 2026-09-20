import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tdqn4zbwe.css';
import '../../css/f/fdhuh8bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tdqn4zbwe"/><path class="fdhuh8bjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:double-heart"} {...others} />);
}

export default Component;
