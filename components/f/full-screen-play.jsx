import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zqp5lnbil.css';
import '../../css/y/ywflu7zrc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zqp5lnbil"/><path class="ywflu7zrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:full-screen-play"} {...others} />);
}

export default Component;
