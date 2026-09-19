import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itduwablw.css';
import '../../css/e/eeqboeb7g.css';
import '../../css/l/l6ud8sbvl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="itduwablw"/><path class="eeqboeb7g"/><path class="l6ud8sbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:video"} {...others} />);
}

export default Component;
