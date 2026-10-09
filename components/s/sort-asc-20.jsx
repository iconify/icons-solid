import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajs58j51b.css';
import '../../css/v/vh5d1qbgq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ajs58j51b"/><path class="vh5d1qbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-asc-20"} {...others} />);
}

export default Component;
