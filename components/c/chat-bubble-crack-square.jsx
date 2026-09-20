import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mlki84b5v.css';
import '../../css/h/hty5jrb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mlki84b5v"/><path class="hty5jrb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chat-bubble-crack-square"} {...others} />);
}

export default Component;
