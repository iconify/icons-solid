import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g-xd4-oby.css';
import '../../css/s/s7a0ofbcd.css';
import '../../css/f/fmzmkacse.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g-xd4-oby"/><path class="s7a0ofbcd"/><path class="fmzmkacse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:design-tool-liquid-glue"} {...others} />);
}

export default Component;
