import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a72iadcaj.css';
import '../../css/k/kw_5c9b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a72iadcaj"/><path class="kw_5c9b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chat-two-bubbles-oval"} {...others} />);
}

export default Component;
