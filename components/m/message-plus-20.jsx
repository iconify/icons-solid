import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh8pb8bip.css';
import '../../css/l/l19bqcctk.css';
import '../../css/c/cs433rzwf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xh8pb8bip"/><path class="l19bqcctk"/><path class="cs433rzwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-plus-20"} {...others} />);
}

export default Component;
