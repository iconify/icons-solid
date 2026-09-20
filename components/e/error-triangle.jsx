import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk2kad5se.css';
import '../../css/t/tqd73obgx.css';
import '../../css/m/mzb3cwb-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mk2kad5se"/><path class="tqd73obgx"/><path class="mzb3cwb-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:error-triangle"} {...others} />);
}

export default Component;
