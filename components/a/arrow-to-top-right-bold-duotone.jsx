import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-d-8tewy.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/hfqsmecof.css';
import '../../css/q/qb_h7yw5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e-d-8tewy"/><g class="xtpeb-edw"><path class="hfqsmecof"/><path class="qb_h7yw5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-to-top-right-bold-duotone"} {...others} />);
}

export default Component;
