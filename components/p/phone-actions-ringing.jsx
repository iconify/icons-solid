import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ie9_z75ey.css';
import '../../css/t/trpawbbtl.css';
import '../../css/e/evnbscrbr.css';
import '../../css/y/yc64rmg6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ie9_z75ey"/><path class="trpawbbtl"/><path class="evnbscrbr"/><path class="yc64rmg6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:phone-actions-ringing"} {...others} />);
}

export default Component;
