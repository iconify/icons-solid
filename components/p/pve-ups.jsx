import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuisidc2h.css';
import '../../css/k/kensec86u.css';
import '../../css/t/tuvs7pa-d.css';
import '../../css/j/j-0-v4b_h.css';
import '../../css/x/xfkcrqbqu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iuisidc2h"/><path class="kensec86u"/><path class="tuvs7pa-d"/><path class="j-0-v4b_h"/><path class="xfkcrqbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pve-ups"} {...others} />);
}

export default Component;
