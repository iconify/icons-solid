import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x4rmk8quk.css';
import '../../css/u/uybie1zay.css';
import '../../css/h/hwo5o2leu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x4rmk8quk"/><path class="uybie1zay"/><path class="hwo5o2leu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bachelor-cap-two"} {...others} />);
}

export default Component;
