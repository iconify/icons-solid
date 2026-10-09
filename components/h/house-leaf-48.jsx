import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9czz4bal.css';
import '../../css/c/ccr9upwvl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d9czz4bal"/><path class="ccr9upwvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-leaf-48"} {...others} />);
}

export default Component;
