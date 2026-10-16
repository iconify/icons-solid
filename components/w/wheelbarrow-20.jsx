import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh_53abzu.css';
import '../../css/i/ijjhc3b5x.css';
import '../../css/u/uv47p4bdr.css';
import '../../css/f/f3itb8bvi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lh_53abzu"/><path class="ijjhc3b5x"/><path class="uv47p4bdr"/><path class="f3itb8bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wheelbarrow-20"} {...others} />);
}

export default Component;
