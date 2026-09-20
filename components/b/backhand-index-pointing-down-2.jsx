import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uymgdabjo.css';
import '../../css/z/zkcsodw7n.css';
import '../../css/a/aqbwc0b2o.css';
import '../../css/y/y1om2457k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uymgdabjo"/><path class="zkcsodw7n"/><path class="aqbwc0b2o"/><path class="y1om2457k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:backhand-index-pointing-down-2"} {...others} />);
}

export default Component;
