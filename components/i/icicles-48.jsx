import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgupoibyg.css';
import '../../css/l/lkae4mbsj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rgupoibyg"/><path class="lkae4mbsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:icicles-48"} {...others} />);
}

export default Component;
