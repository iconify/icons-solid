import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3hcjybun.css';
import '../../css/s/sq0k58bdr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r3hcjybun"/><path class="sq0k58bdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-48-bold"} {...others} />);
}

export default Component;
