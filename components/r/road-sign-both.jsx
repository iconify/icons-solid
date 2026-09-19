import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lp18dgbmu.css';
import '../../css/g/gr78cdb7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lp18dgbmu"/><path class="gr78cdb7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:road-sign-both"} {...others} />);
}

export default Component;
