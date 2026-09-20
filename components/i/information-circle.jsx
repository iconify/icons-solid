import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rc0v0t5_w.css';
import '../../css/r/r6btyfq0n.css';
import '../../css/g/gavebgz5n.css';
import '../../css/a/awaz3178e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="rc0v0t5_w"/><path class="r6btyfq0n"/><path class="gavebgz5n"/><path class="awaz3178e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:information-circle"} {...others} />);
}

export default Component;
