import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gx_95itmz.css';
import '../../css/z/zgipi4gzm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="gx_95itmz"/><path class="zgipi4gzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mind-mapping"} {...others} />);
}

export default Component;
