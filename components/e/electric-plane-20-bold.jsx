import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txfkbpb1g.css';
import '../../css/y/y7nz84h9j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="txfkbpb1g"/><path class="y7nz84h9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-plane-20-bold"} {...others} />);
}

export default Component;
