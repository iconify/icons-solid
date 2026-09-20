import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/df_e31bja.css';
import '../../css/b/b7xrf33kq.css';
import '../../css/v/v0fh7rayz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="df_e31bja"/><circle class="b7xrf33kq"/><path class="v0fh7rayz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-time-stop-watch-timer-countdown-clock"} {...others} />);
}

export default Component;
