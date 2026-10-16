import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6xx492kn.css';
import '../../css/x/xlyqlub7x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b6xx492kn"/><path class="xlyqlub7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spillway-20"} {...others} />);
}

export default Component;
