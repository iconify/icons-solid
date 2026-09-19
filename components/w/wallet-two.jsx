import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gaw1s1qji.css';
import '../../css/o/olnotz5yy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="gaw1s1qji"/><path class="olnotz5yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:wallet-two"} {...others} />);
}

export default Component;
