import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gro8lebrz.css';
import '../../css/c/c6_bjubqo.css';
import '../../css/d/d50-4zb9n.css';
import '../../css/r/rkepvhbsd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gro8lebrz"/><path class="c6_bjubqo"/><path class="d50-4zb9n"/><path class="rkepvhbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mvhr-20-bold"} {...others} />);
}

export default Component;
