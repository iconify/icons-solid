import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/l/lbj5m-bzm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="p-3d8dotc"/><path class="lbj5m-bzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:upload-three"} {...others} />);
}

export default Component;
