import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w2ztdb4bn.css';
import '../../css/l/l03k8nb-h.css';
import '../../css/p/pbk4v8bdw.css';
import '../../css/o/otwzbibsg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="w2ztdb4bn"/><path class="l03k8nb-h"/><path class="pbk4v8bdw"/><path class="otwzbibsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-calendar-logo"} {...others} />);
}

export default Component;
