import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv2slsbxu.css';
import '../../css/g/glkalfxwv.css';
import '../../css/y/ywpb2n2bu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uv2slsbxu"/><path class="glkalfxwv"/><path class="ywpb2n2bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hi-vis-vest-20-bold"} {...others} />);
}

export default Component;
