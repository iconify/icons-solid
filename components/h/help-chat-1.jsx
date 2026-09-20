import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f37w8wlql.css';
import '../../css/f/f0ijdob7i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="f37w8wlql"/><path class="f0ijdob7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:help-chat-1"} {...others} />);
}

export default Component;
