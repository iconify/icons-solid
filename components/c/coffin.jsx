import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga0pcf7nn.css';
import '../../css/y/yw-kuoblr.css';
import '../../css/g/gj93o6nmi.css';
import '../../css/j/j0ehefpev.css';
import '../../css/d/d6iwvkblw.css';
import '../../css/v/v2lr-v14q.css';
import '../../css/o/okusic9uw.css';
import '../../css/l/laacp7bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ga0pcf7nn wm-shadow"/><path class="wm-k yw-kuoblr"/><path class="gj93o6nmi wm-k"/><path class="j0ehefpev wm-k"/><path class="d6iwvkblw wm-k"/><path class="v2lr-v14q wm-k"/><path class="okusic9uw wm-shine"/><path class="laacp7bwz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:coffin"} {...others} />);
}

export default Component;
