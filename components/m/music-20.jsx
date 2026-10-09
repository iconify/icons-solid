import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaigx2b8t.css';
import '../../css/l/lj4fzeu5n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zaigx2b8t"/><path class="lj4fzeu5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:music-20"} {...others} />);
}

export default Component;
