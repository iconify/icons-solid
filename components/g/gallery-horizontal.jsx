import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8ou65beg.css';
import '../../css/i/ipqyekwli.css';
import '../../css/s/so-vfyj7e.css';
import '../../css/g/gjh2gb_sm.css';
import '../../css/d/dbxm0xu7h.css';
import '../../css/i/iq5uhwl4q.css';
import '../../css/v/v3uwzacjm.css';
import '../../css/r/riiy_udxv.css';
import '../../css/y/yrxe8lzeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y8ou65beg"/><path class="ipqyekwli wm-k"/><path class="so-vfyj7e wm-k"/><path class="gjh2gb_sm wm-k"/><path class="dbxm0xu7h wm-k"/><path class="iq5uhwl4q wm-k"/><path class="v3uwzacjm wm-shine"/><path class="riiy_udxv wm-a"/><path class="wm-a yrxe8lzeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:gallery-horizontal"} {...others} />);
}

export default Component;
