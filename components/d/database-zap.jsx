import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qwv8uccxb.css';
import '../../css/e/erq8epbuc.css';
import '../../css/r/rud_6rb2q.css';
import '../../css/o/o7trffbyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qwv8uccxb wm-k"/><path class="erq8epbuc wm-s"/><path class="rud_6rb2q"/><path class="o7trffbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:database-zap"} {...others} />);
}

export default Component;
