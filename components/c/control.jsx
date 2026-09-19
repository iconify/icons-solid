import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nsqnp5fhf.css';
import '../../css/d/d__e8ittb.css';
import '../../css/d/daph9-bsy.css';
import '../../css/a/ar9eotbwa.css';
import '../../css/o/o2ois6brh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="nsqnp5fhf"/><circle class="d__e8ittb"/><path class="daph9-bsy"/><path class="ar9eotbwa"/><path class="o2ois6brh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:control"} {...others} />);
}

export default Component;
