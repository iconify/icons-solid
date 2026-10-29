import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/raymrib0l.css';
import '../../css/l/l00otmbzz.css';
import '../../css/l/l-cwjj2tp.css';
import '../../css/t/tw7frqbfz.css';
import '../../css/j/jjywn-bdx.css';
import '../../css/h/h2wtbpb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="raymrib0l wm-deco"/><path class="l00otmbzz wm-deco"/><path class="l-cwjj2tp wm-k"/><path class="tw7frqbfz wm-a"/><path class="jjywn-bdx wm-k"/><path class="h2wtbpb8x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:inbox-blueprint"} {...others} />);
}

export default Component;
