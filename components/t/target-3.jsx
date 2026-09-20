import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rc0v0t5_w.css';
import '../../css/y/y67c9vopq.css';
import '../../css/g/gavebgz5n.css';
import '../../css/g/gtm_9hbvt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="rc0v0t5_w"/><path class="y67c9vopq"/><path class="gavebgz5n"/><path class="gtm_9hbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:target-3"} {...others} />);
}

export default Component;
