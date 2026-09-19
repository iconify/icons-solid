import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/p/ppz5gobfv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="ppz5gobfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:emotion-unhappy"} {...others} />);
}

export default Component;
