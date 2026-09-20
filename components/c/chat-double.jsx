import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbpd03b3q.css';
import '../../css/p/ptdmcqm6k.css';
import '../../css/u/u0gevvf-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bbpd03b3q"/><path class="ptdmcqm6k"/><path class="u0gevvf-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chat-double"} {...others} />);
}

export default Component;
