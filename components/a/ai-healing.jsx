import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrcgrxwzk.css';
import '../../css/d/d79oyzb2x.css';
import '../../css/d/d1ym2h3ya.css';
import '../../css/x/xp11q_bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrcgrxwzk"/><circle class="d79oyzb2x"/><circle class="d1ym2h3ya"/><path class="xp11q_bwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:ai-healing"} {...others} />);
}

export default Component;
