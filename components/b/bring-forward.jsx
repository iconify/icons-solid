import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mfnw748xj.css';
import '../../css/q/qemtg7_xl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mfnw748xj"/><path class="qemtg7_xl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bring-forward"} {...others} />);
}

export default Component;
