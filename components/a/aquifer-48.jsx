import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgupoibyg.css';
import '../../css/u/uc3zgsbbm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rgupoibyg"/><path class="uc3zgsbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aquifer-48"} {...others} />);
}

export default Component;
