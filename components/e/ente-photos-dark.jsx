import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbjzb3tkp.css';
import '../../css/v/vj9ta8b3a.css';
import '../../css/s/s_5frpfwj.css';
import '../../css/u/u1dblbbwq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pbjzb3tkp"/><path class="vj9ta8b3a"/><path class="s_5frpfwj"/><path class="u1dblbbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-photos-dark"} {...others} />);
}

export default Component;
