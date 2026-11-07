import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0wezz6ua.css';
import '../../css/u/uwzl8fb_s.css';
import '../../css/s/szxap0dkq.css';
import '../../css/b/bpjd7ebcd.css';
import '../../css/o/oi0biibbh.css';
import '../../css/d/dviytx94g.css';
import '../../css/v/v-nan0c6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0wezz6ua"/><path class="uwzl8fb_s"/><path class="szxap0dkq"/><path class="bpjd7ebcd"/><path class="oi0biibbh"/><path class="dviytx94g"/><path class="v-nan0c6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-list-bold-duotone"} {...others} />);
}

export default Component;
