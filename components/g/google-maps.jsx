import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nntzbb59q.css';
import '../../css/h/hmxzfbbbc.css';
import '../../css/c/czkarxbam.css';
import '../../css/o/opy7cax-c.css';
import '../../css/x/xmbjqibnh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nntzbb59q"/><path class="hmxzfbbbc"/><path class="czkarxbam"/><path class="opy7cax-c"/><path class="xmbjqibnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-maps"} {...others} />);
}

export default Component;
