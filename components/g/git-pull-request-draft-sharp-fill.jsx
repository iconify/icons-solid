import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kutuzrblr.css';
import '../../css/h/hz7_q3dyh.css';
import '../../css/p/pn5m_ac8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="kutuzrblr"/><path class="hz7_q3dyh"/><path class="pn5m_ac8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-pull-request-draft-sharp-fill"} {...others} />);
}

export default Component;
