import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvbspp7nc.css';
import '../../css/z/zirfm5w_h.css';
import '../../css/e/eg7t2lx5y.css';
import '../../css/n/nn-_vitmv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lvbspp7nc"/><path class="zirfm5w_h"/><path class="eg7t2lx5y"/><path class="nn-_vitmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-in-steamy-room"} {...others} />);
}

export default Component;
