import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/beq2bq-ru.css';
import '../../css/g/gitu83bla.css';
import '../../css/a/azlmfgbpz.css';
import '../../css/v/vu-t8mz1s.css';
import '../../css/i/idh12yb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="beq2bq-ru wm-k"/><path class="gitu83bla wm-shadow"/><path class="azlmfgbpz wm-k"/><path class="vu-t8mz1s wm-k"/><path class="idh12yb8z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:house-plus-engrave"} {...others} />);
}

export default Component;
