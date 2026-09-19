import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/haa2czbgj.css';
import '../../css/g/gcng8vetl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="haa2czbgj"/><path class="gcng8vetl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:home-two"} {...others} />);
}

export default Component;
