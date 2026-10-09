import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9czz4bal.css';
import '../../css/m/m1-j5hxxc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d9czz4bal"/><path class="m1-j5hxxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-heart-48"} {...others} />);
}

export default Component;
