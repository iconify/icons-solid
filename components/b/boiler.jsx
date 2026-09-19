import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/a-c5vwb3a.css';
import '../../css/h/hizj3i7nm.css';
import '../../css/f/fog77mvfq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="a-c5vwb3a"/><path class="hizj3i7nm"/><path class="fog77mvfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:boiler"} {...others} />);
}

export default Component;
