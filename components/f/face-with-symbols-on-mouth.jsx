import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pliydb_1w.css';
import '../../css/p/pj0hbnttb.css';
import '../../css/d/dbgco8iod.css';
import '../../css/z/z0tkcacyt.css';
import '../../css/i/i8ravub8k.css';
import '../../css/g/g8uh3omvd.css';
import '../../css/w/wxel5mb7h.css';
import '../../css/n/nicf38bhv.css';
import '../../css/m/mv1a9fbpd.css';
import '../../css/g/gq3_jabml.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pliydb_1w"/><path class="pj0hbnttb"/><path class="dbgco8iod"/><path class="z0tkcacyt"/><path class="i8ravub8k"/><path class="g8uh3omvd"/><path class="wxel5mb7h"/><path class="nicf38bhv"/><path class="mv1a9fbpd"/><path class="gq3_jabml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:face-with-symbols-on-mouth"} {...others} />);
}

export default Component;
