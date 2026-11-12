import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2327-tyh.css';
import '../../css/e/emweeejoz.css';
import '../../css/r/r6vad2uub.css';
import '../../css/x/x7-f5dbjn.css';
import '../../css/d/db3lu7bhd.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="w2327-tyh"/><path class="emweeejoz"/><path class="r6vad2uub"/><path class="x7-f5dbjn"/><path class="db3lu7bhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-access-2018-dark"} {...others} />);
}

export default Component;
