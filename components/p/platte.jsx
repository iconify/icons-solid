import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/ziae3bb2o.css';
import '../../css/v/vy88app5s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ziae3bb2o"/><path class="vy88app5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:platte"} {...others} />);
}

export default Component;
