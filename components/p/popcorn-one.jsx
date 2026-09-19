import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q_xrnyxsg.css';
import '../../css/o/oxc3ynbjv.css';
import '../../css/c/c2yr0367r.css';
import '../../css/i/i8g5t7d9p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyA5ZSbRA"><g class="wwvp95byt"><path class="q_xrnyxsg"/><path class="oxc3ynbjv"/><path class="c2yr0367r"/><path class="i8g5t7d9p"/></g></mask></defs><path mask="url(#SVGyA5ZSbRA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:popcorn-one"} {...others} />);
}

export default Component;
