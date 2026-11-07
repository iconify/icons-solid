import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkj7k3nbl.css';
import '../../css/z/z0lqnqbjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkj7k3nbl"/><path clip-rule="evenodd" class="z0lqnqbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:import-bold-duotone"} {...others} />);
}

export default Component;
