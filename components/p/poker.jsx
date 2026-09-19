import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r01_y1l6s.css';
import '../../css/s/srynasjdu.css';
import '../../css/t/tgu0b0qac.css';
import '../../css/s/sw1ouqb9w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="r01_y1l6s"/><path clip-rule="evenodd" class="srynasjdu"/><path class="tgu0b0qac"/><path class="sw1ouqb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:poker"} {...others} />);
}

export default Component;
