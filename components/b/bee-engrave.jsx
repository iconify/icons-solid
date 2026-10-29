import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sfjcrxw8m.css';
import '../../css/e/elmzdpb0f.css';
import '../../css/d/d1xkg3smp.css';
import '../../css/f/fateqpjcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sfjcrxw8m"/><path class="elmzdpb0f wm-shadow"/><path class="d1xkg3smp"/><path class="fateqpjcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bee-engrave"} {...others} />);
}

export default Component;
