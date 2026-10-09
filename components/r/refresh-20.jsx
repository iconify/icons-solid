import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8cp6cb9j.css';
import '../../css/b/bqwp1jb7n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r8cp6cb9j"/><path class="bqwp1jb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-20"} {...others} />);
}

export default Component;
