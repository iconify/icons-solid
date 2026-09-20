import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ew9ynfbey.css';
import '../../css/h/hoi9n8bdx.css';
import '../../css/q/q3piinb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ew9ynfbey"/><path class="hoi9n8bdx"/><path class="q3piinb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:webcam-off-1"} {...others} />);
}

export default Component;
