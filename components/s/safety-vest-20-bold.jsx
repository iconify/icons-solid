import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9-064bdl.css';
import '../../css/l/lxjm5vb4n.css';
import '../../css/n/n61va8bab.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m9-064bdl"/><path class="lxjm5vb4n"/><path class="n61va8bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safety-vest-20-bold"} {...others} />);
}

export default Component;
