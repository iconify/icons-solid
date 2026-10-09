import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoimw9qqn.css';
import '../../css/j/jgct6lokd.css';
import '../../css/c/c_j3vh1fn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xoimw9qqn"/><path class="jgct6lokd"/><path class="c_j3vh1fn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bird-safe-20"} {...others} />);
}

export default Component;
