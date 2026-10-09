import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9a0osi5b.css';
import '../../css/s/s5jqyc38e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x9a0osi5b"/><path class="s5jqyc38e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wrench-48-bold"} {...others} />);
}

export default Component;
