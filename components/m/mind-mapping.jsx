import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f2czm7m8z.css';
import '../../css/r/rk0ci9b5a.css';
import '../../css/z/zgipi4gzm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="f2czm7m8z"/><path class="rk0ci9b5a"/><path class="zgipi4gzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mind-mapping"} {...others} />);
}

export default Component;
