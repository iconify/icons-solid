import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogjhj0zyh.css';
import '../../css/s/s8-x_jb_g.css';
import '../../css/n/n198smeot.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ogjhj0zyh"/><path class="s8-x_jb_g"/><path class="n198smeot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:electrical-threshold"} {...others} />);
}

export default Component;
